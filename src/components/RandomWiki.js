import React from 'react';

export default function RandomWiki(props) {
    const randomWikiLink = 'https://en.wikipedia.org/wiki/Special:Random';
    return (
        <div className='RandomWikiWrapper'>
            <a href={randomWikiLink} className='RandomWiki' target="_blank">
                Click here for random link
            </a>
        </div>
    );
}
