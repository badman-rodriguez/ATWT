import React from 'react';
import ReactDOM from 'react-dom';

class AtwtForm extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            name: '',
            email: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(input, type) {
        var text = input,
            isValid = false;
        if(type == 'name') {
            this.setState({name: text});
        }
        else if(type == 'email'){
            this.setState({email: text});
        } 
        else {
            this.setState({message: text});
        }
    }
    
    handleSubmit(event, state) {
        event.preventDefault();
        //submit content to db now instead on approved messages list
    }
    
    render(){
        return (
            <form>
                <label>
                    Name:
                </label>
                <input type="text" placeholder={this.state.name} placeholder='Enter Name' onChange={e => this.handleChange(e.target.value, 'name')} />
                <label>
                    Email:
                </label>
                <input type="text" value={this.state.email} placeholder='Enter Email'  onChange={e => this.handleChange(e.target.value, 'email')} />
                <label>
                    Message:
                </label>
                <textarea value={this.state.message} placeholder='Write a Message'  onChange={e => this.handleChange(e.target.value, 'message')} ></textarea>
                <button onClick={(e) => this.handleSubmit(e, this.state)}>Update</button>
            </form>
        );
    }
}

ReactDOM.render(
  <AtwtForm />,
  document.getElementById('form')
);