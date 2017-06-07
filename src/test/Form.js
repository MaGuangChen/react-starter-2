import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RequiredInputText from './RequiredInputText';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', price: ''};
        this.onTextChange = this.onTextChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onTextChange(e) {
        this.setState({
            text: e.target.value,
        });
    }

    onPriceChange(e){
        this.setState({
            price: e.target.value,
        });
    }

    handleSubmit(e) {
        console.log(this.state.text);
        
        console.log(this.state.price);
    }


    render() {
        return (
            <form>
               名稱: <RequiredInputText name="name" text={this.state.text} 
               errmsg = "請輸入名稱"
               onTextChg={this.onTextChange} />

               價格: <RequiredInputText name="price" text={this.state.price}
               errmsg = "請輸入價格" 
               onTextChg={this.onPriceChange} />
                <input type="button" onClick={this.handleSubmit} value="Submit"></input>
            </form>
        )
    }
}

