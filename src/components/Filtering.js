import React from 'react';

const Filtering = (props) => {
console.log(props)
    return (
        <div className="filtering"><p>Sort dreams by:</p>
        <button type="button" value="Alphabetically" name="sort" onClick={(e) => props.updateSort(e.target.value)}>alphabet</button>
        <button type="button" value="ReverseAlphabetically" name="sort" onClick={(e) => props.updateSort(e.target.value)}>reverse alphabet</button>
        <button type="button" value="CreationOld" name="sort" onClick={(e) => props.updateSort(e.target.value)}>creation date (oldest ➡️ &nbsp;youngest)</button>
        <button type="button" value="CreationYoung" name="sort" onClick={(e) => props.updateSort(e.target.value)}>creation date (youngest ➡️ &nbsp;oldest)</button>

        {/* <label>
        <input type="radio" value="Alphabetically" name="sort" checked={props.sort === 'Alphabetically'} onChange={(e) => props.updateSort(e.target.value)}/>
        Alphabetically
        </label> */}
        {/* <label>
        <input type="radio" value="ReverseAlphabetically" name="sort" checked={props.sort === 'ReverseAlphabetically'} onChange={(e) => props.updateSort(e.target.value)}/>
        ReverseAlphabetically
        </label>
        <label>
        <input type="radio" value="CreationOld" name="sort" checked={props.sort === 'CreationOld'} onChange={(e) => props.updateSort(e.target.value)}/>
        Creation(oldest-youngest)
        </label>
        <label>
        <input type="radio" value="CreationYoung" name="sort" checked={props.sort === 'CreationYoung'} onChange={(e) => props.updateSort(e.target.value)}/>
        Creation(youngest-oldest)
        </label> */}
        </div>
    )
}

export default Filtering;