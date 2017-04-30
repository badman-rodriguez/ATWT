import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './Recipe.jsx';
import { sortBy } from 'lodash';
import Promise from 'bluebird';
import moment from "moment";

class RecipeList extends React.Component {
    constructor() {
        super();
        this.state = {
            recipeList: [],
            amountOfRecipes: [],
            movie: {
                title: '',
                description: '',
                release: ''
            },
            queryTerm: ''
        }

        // Bing the constructor to the apiCall function
        this.mashupCalls = this.mashupCalls.bind(this);
        this.sortArray = this.sortArray.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.ajaxCall = this.ajaxCall.bind(this);
    }

    mashupCalls() {
        this.ajaxCall('https://api.edamam.com/search?app_id=434c6602&app_key=b01a6c15b43be02d69245fab18e4f760&q=' + this.state.queryTerm, 'recipes').then((response) => {
            this.ajaxCall('https://api.themoviedb.org/3/search/movie?api_key=e54d77ca7bc748d31f716384bcc7f74a&language=en-US&page=1&include_adult=false&query=' + this.state.queryTerm, 'movie')
        });

    }

    ajaxCall(url, type) {
        return $.ajax({
            url: url,
            dataType: 'json',
            crossDomain: true,
            xhrFields: {
                withCredentials: false
            },
            success: (response) => {
                if (type === 'recipes') {
                    this.setState({
                        amountOfRecipes: response.hits
                    });
                } else {
                    this.setState({
                        movie: {
                            title: response.results[0].title,
                            description: response.results[0].overview,
                            release: response.results[0].release_date
                        }
                    });
                }

            },
            error(e) {
                console.log('#Fail')
            }
        });
    }

    handleChange(input) {
        this.setState({ queryTerm: input });
    }

    sortArray(type = 'date') {
        this.setState({
            amountOfRecipes: sortBy(this.state.amountOfRecipes, function (item) {
                //return new moment(item.pubDate).format('YYYYMMDD')
            }).reverse()
        });
    }

    render() {
        var listItems = [];

        listItems = this.state.amountOfRecipes.map(((item, index) => {
            return <Recipe key={index} item={item} />;
        }).bind(this));


        return (
            <section className="search-section">
                <div className="form-group row">
                    <div className="col-md-10">
                        <input type="text" className="form-control" placeholder="Search for a Recipe" onChange={e => this.handleChange(e.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <button onClick={(e) => this.mashupCalls()}  className="btn btn-primary">Search</button>
                    </div>
                </div>
                <div className="movie-title-section">
                    THE MOVIE FOR THE NIGHT IS

                    <div className="alert alert-success">
                        <ul>
                            <li>
                                <strong>Title</strong> {this.state.movie.title}
                            </li>
                            <li>
                                <strong>Description</strong> {this.state.movie.description}
                            </li>
                            <li>
                                <strong>Release</strong> {this.state.movie.release}
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="recipe-list">
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </section>
        );
    }
}

export default RecipeList;