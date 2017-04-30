import React from 'react';
import ReactDOM from 'react-dom'

class Recipe extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log(this.props);
    }
    
    render() {
        return (
            <li className="col-3">
                <div className="card">
                    <img className="card-img-top" src={this.props.item.recipe.image}/>
                    <div className="card-block">
                        <h4 className="card-title">{this.props.item.recipe.label}</h4>
                        <a href={this.props.item.recipe.url} className="btn btn-primary" target="_blank">Get Recipe</a>
                    </div>
                </div>
            </li>
        );
    }
}

export default Recipe;