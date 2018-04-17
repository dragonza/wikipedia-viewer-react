import React, { Component } from 'react';
import classNames from 'classnames';

import RandomWiki from './RandomWiki';
import SearchBar from './SearchBar';
import WikiList from './WikiList';


class WikiViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            wikiList: [],
            isLoading: false,
            firstLoad: false,
        };
    };

    componentWillMount() {
        this.setState({ firstLoad: true });
    }

    handleKeywordChange = (keyword) => {
        this.setState({ keyword: keyword });
    };

    triggerSearch = (keyword) => {
        this.setState({
            isLoading: true,
        })
        this.fetchDataFromWiki(keyword);
    };

// solve CORS https://www.mediawiki.org/wiki/Manual:CORS#Description
    fetchDataFromWiki = (keyword) => {
        const root = "https://en.wikipedia.org//w/api.php?origin=*&action=query&format=json&list=search&utf8=1&srsearch=";
        fetch(`${root}${keyword}`, {
            method: "get",
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            })
        })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    wikiList: data.query.search,
                    isLoading: false,
                    firstLoad: false,
                })
            })
            .catch(function(err) {
                console.error(err);
            });
    };

    handleResetKeyword = () => {
        this.setState({
            keyword: '',
        })
    };

    buildComponent = (props, state) => {
        const cls = classNames('WikiViewer', {
            FirstLoad: state.firstLoad,
        })
        return (
            <div className={cls}>
                <div className="WikiHeader">
                    <RandomWiki />
                    <SearchBar
                        onKeywordChange={this.handleKeywordChange}
                        triggerSearch={this.triggerSearch}
                        resetKeyword={this.handleResetKeyword}
                    />
                </div>
                {
                    state.isLoading ? <div className='isLoading'>Loading...</div> :
                        <WikiList wikiList={this.state.wikiList} />
                }
            </div>
        );
    };

    render() {
        return this.buildComponent(this.props, this.state);
    }
}

export default WikiViewer;
