import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class SelectOption extends Component{
    constructor(props){
        super(props);
        this.state = {selected: 3};
        this.onSelectChange = this.onSelectChange.bind(this);
    }
    onSelectChange(e){

        e.preventDefault();
        this.setState({
            selected: e.target.value
        });
    }

    render(){
        return (<select value={this.state.selected} onChange={this.onSelectChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
        )
    }
}
