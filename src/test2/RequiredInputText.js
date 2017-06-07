import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RequiredInputText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let error = <span style={{ color: '#ff0000' }}>{this.props.errmsg}</span>;
        let isShowError = this.props.text == ''?true: false;

        return (<div>
            <input type="text" name={this.props.name} value={this.props.text} onChange={this.props.onTextChg}></input>
            {isShowError&&error}
        </div>
        )
    }
}