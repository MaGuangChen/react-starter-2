import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InputText from '../input/InputText';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {text: ''};
        this.onTextChange = this.onTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onTextChange(e){
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e){

        console.log(this.state.text);
    }

    render(){
        return (
            <form>
                <input type="text" value={this.state.text} onChange={this.onTextChange}></input>
                <input type="button" onClick={this.handleSubmit} value="Submit"></input>
            </form>
        )
    }
}