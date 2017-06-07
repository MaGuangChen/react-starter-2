import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';


class GithubItem extends Component {

    render() {
        return (<div>{this.props.name}</div>)
    }
}

class GithubList extends Component {

    render() {
        let items = <div></div>;
        if (this.props.items != null) {
        
            let filteredItems = this.props.items;

            if (this.props.searchText != "") {
                filteredItems = this.props.items.filter((item) => {

                    if (item.name.includes(this.props.searchText)) {
                        return item;
                    }
                })

            }
                
                items = filteredItems.map((item) => {

                    return <GithubItem key={item.id} name={item.name}></GithubItem>
                });

        }

        return (<div>
            {items}
        </div>)

    }
}


export default class FilterableGithub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            items: null,
            text: ''
        };
        this.onTextChange = this.onTextChange.bind(this);
    }

    componentDidMount() {

        this.setState({
            isLoading: true
        })
        $.ajax({
            url: `https://api.github.com/orgs/facebook/repos`,
            success: (res) => {

                this.setState({
                    isLoading: false,
                    items: res
                })


            },
            error: (err) => {
            }
        })

    }




    onTextChange(e) {

        e.preventDefault();
        this.setState({
            text: e.target.value
        });
    }

    render() {

        let content;
        if (this.state.isLoading) {
            content = <div>It is Loading</div>

        } else {
            content = <div>
                <input type="text" value={this.state.text} onChange={this.onTextChange}></input>
                <GithubList items={this.state.items} searchText={this.state.text} />
            </div>
        }
        return (
            <div>

                {content}

            </div>
        )
    }
}
