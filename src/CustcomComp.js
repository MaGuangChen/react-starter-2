import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Lifecycle from './Lifecycle';

export default class CustomComp extends Component{
    constructor(props){
        super(props);
        this.state = {isShown: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){

        this.setState(prevState => ({
            isShown: !prevState.isShown
            }))
    }

    render(){
        return (<div>
        <button type="button" onClick={this.handleClick}>toggle</button>
        
        Component Lifecycle
        
        {this.state.isShown && <Lifecycle/>}
        
        </div>
        )
    }
}