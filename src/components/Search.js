import React from 'react'

const Search = (props) => {

    const onChangeHandler = (event) => {
        props.search(event.target.value)
    }

    return (
        <input type="text" placeholder="Search for a dream here" onChange={onChangeHandler} value={props.searchTermProp} />
    )
}

export default Search