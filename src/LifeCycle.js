import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class LifeCycle extends Component{
   constructor(props){
        super(props);
        console.log("constructor");
    }
    componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render(){
      console.log("render");
        return (<div>Component will ummount</div>
        )
    }
}