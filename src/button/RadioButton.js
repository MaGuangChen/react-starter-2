import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class RadioButton extends Component{
    constructor(props){
        super(props);
        this.state = {selectedItem: ''};
        this.onRadioButtonChange = this.onRadioButtonChange.bind(this);
    }
    onRadioButtonChange(e){

        console.log(e.target.value);
        
        this.setState({
            selectedItem: e.target.value
        });
    }

    render(){
        return (<div>
                    <input type="radio" name="fruit" value="apple" 
                    checked={this.state.selectedItem == 'apple'} 
                    onChange={this.onRadioButtonChange}></input>Apple
                    <input type="radio" name="fruit" value="banana" 
                    checked={this.state.selectedItem == 'banana'} 
                    onChange={this.onRadioButtonChange}></input>Banana
                </div>
        )
    }
}
