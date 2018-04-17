import React from 'react';

export default function WikiListItem(props) {
    const  directLink = `https://en.wikipedia.org/?curid=${props.wikiListItem.pageid}`;
    const { title, snippet } = props.wikiListItem
    return (
        <div className='WikiListItem'>
            <a href={directLink} className='Anchor' target="_blank">
                <div className="WikiTitle"> {title} </div>
                <div dangerouslySetInnerHTML={{__html: snippet}} />
            </a>
        </div>
    );
}
