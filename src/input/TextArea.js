import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class TextArea extends Component{
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

    render(){
        return (<textarea type="text" value={this.state.text} onChange={this.onTextChange}></textarea>
        )
    }
}
