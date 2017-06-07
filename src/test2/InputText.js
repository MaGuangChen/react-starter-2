import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class InputText extends Component{
    constructor(props){
        super(props);
        this.state = {text: ''};
    }

    componentWillReceiveProps(nextProps){
        console.log(this.props.text);
        console.log(nextProps.text);
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
        return (<input type="text" value={this.props.text} onChange={this.props.onTextChange}></input>
        )
    }
}

