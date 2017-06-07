import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Checkbox extends Component{
    constructor(props){
        super(props);
        this.state = {isChecked: false};
        this.onTextChange = this.onTextChange.bind(this);
    }
    onTextChange(e){
        this.setState({
            isChecked: !this.state.isChecked
        });
    }

    render(){
        return (<input type="checkbox" checked={this.state.isChecked} onChange={this.onTextChange}></input>
        )
    }
}
