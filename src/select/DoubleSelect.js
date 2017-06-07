import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DoubleSelect extends Component{
    constructor(props){
        super(props);
        this.state = {area: 0,
                      country:0
                        };
        this.onAreaChange = this.onAreaChange.bind(this);
        this.onCountryChange = this.onCountryChange.bind(this);
    }
    
    
    onAreaChange(e){

        this.setState({
            area: e.target.value,
            country: e.target.value+'0'
        });
    }

    onCountryChange(e){
        this.setState({
            country: e.target.value
        });

    }

    render(){

        let areaOptions = this.props.area.map((item) =>{
            return <option key={item.id} value={item.id}>{item.value}</option>
        })
        let countries = this.props.area[this.state.area].opt;
        let countryOptions = countries.map((item) =>{
            return <option key={item.id} value={item.id}>{item.value}</option>
        })

        return (
            <div>
                <select value={this.state.area} onChange={this.onAreaChange}>
                   {areaOptions}
                </select>
                <select value={this.state.country} onChange={this.onCountryChange}>
                    {countryOptions}
                </select>
            </div>
        )
    }
}

