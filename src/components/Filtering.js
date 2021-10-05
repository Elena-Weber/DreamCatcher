import React from 'react';

 // buttons to sort dreams
const Filtering = (props) => {
    return (
        <div className="filtering"><p>Sort dreams by:</p>
        <button type="button" value="Alphabetically" name="sort" onClick={(e) => props.updateSort(e.target.value)}>alphabet</button>
        <button type="button" value="ReverseAlphabetically" name="sort" onClick={(e) => props.updateSort(e.target.value)}>reverse alphabet</button>
        <button type="button" value="CreationOld" name="sort" onClick={(e) => props.updateSort(e.target.value)}>creation date (oldest ➡️ &nbsp;youngest)</button>
        <button type="button" value="CreationYoung" name="sort" onClick={(e) => props.updateSort(e.target.value)}>creation date (youngest ➡️ &nbsp;oldest)</button>
        </div>
    )
}

export default Filtering;