import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CustomComp extends Component{

	constructor(props){
        super(props);
        this.state = {isShown:false, name: props.name};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.setState(prevState =>({
            isShown: !prevState.isShown
        }))
    }

    render(){
        
        return(
            <div>
                {this.props.name}
                {this.state.isShown &&<div>
                    I am visible now
                    </div>}
                <button onClick={this.handleClick}>Shown</button>
            </div>
        )
    }
}

CustomComp.propTypes = {
    name : PropTypes.string.isRequired
}