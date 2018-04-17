import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: this.props.keyword || '',
        }
    };

    handleKeywordChange = (e) => {
        this.setState({ keyword: e.target.value });
        this.props.onKeywordChange(e.target.value)
    };

    handleEnter = (e) => {
        const keyword = e.target.value.trim();
        if (e.charCode === 13) {
            this.props.triggerSearch(keyword);
        }
    };

    resetKeyword = () => {
        this.setState({
            keyword: '',
        });
        this.props.resetKeyword();
    };

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBarInput">
                    <input
                        type='text'
                        placeholder='Search Me'
                        value={this.state.keyword}
                        onChange={this.handleKeywordChange}
                        onKeyPress={this.handleEnter}
                        className="SearchInputText"
                    />
                    <div className='ResetKeyword ResetIcon' onClick={this.resetKeyword}> x</div>
                </div>

            </div>
        );
    }
};
