import React from 'react';
import WikiListItem from './WikiItem';

export default function WikiList(props) {
    if (!props.wikiList) {
        return null;
    }
    return (
        <div className='WikiList'>
            {
                props.wikiList.map(item => {
                    return <WikiListItem wikiListItem={item} key={item.pageid} />
                })
            }
        </div>
    );
}
