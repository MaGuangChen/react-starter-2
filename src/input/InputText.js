import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class InputText extends Component{
    constructor(props){
        super(props);
        this.state = {text: ''};
        this.onTextChange = this.onTextChange.bind(this);
    }
    
    onTextChange(e){
        e.preventDefault();
        console.log("inputText:" + e.target.value);
        this.setState({
            text: e.target.value
        });
    }

    render(){
        return (<input type="text" value={this.state.text} onChange={this.onTextChange}></input>
        )
    }
}

