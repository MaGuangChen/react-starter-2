import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class UncontrolledComponent extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMounts(){
        this.textInput.focus();
        console.log(this.textInput);
    }

    handleSubmit(){
        console.log(this.textInput.value);
    }

    render(){
        return (<form>
                    <label>輸入欄位</label> <input type="text" ref={(input) =>{ this.textInput = input;}}></input>
                    <input type="button" onClick={this.handleSubmit} value="傳送"></input>
                </form>
        )
    }
}
