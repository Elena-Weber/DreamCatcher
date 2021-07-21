import React from 'react';

const Search = (props) => {

    const onChangeHandler = (event) => {
        props.search(event.target.value)
    }

    return (
        <div><input type="text" placeholder="Start typing to find a dream" onChange={onChangeHandler} value={props.searchTermProp} /></div>
    )
}

export default Search;