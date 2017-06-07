import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Updating extends Component{
    constructor(props){
        super(props);
        this.state = {text: ''};
        this.onTextChange = this.onTextChange.bind(this);
    }
    onTextChange(e){

        e.preventDefault();
        this.setState({
            text: e.target.value
        });
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");

        return true;
    }

    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    render(){
        console.log("rendering");
        return (
            <div>
            <input type="text" value={this.state.text} onChange={this.onTextChange}></input>
            </div>
        )
    }
}