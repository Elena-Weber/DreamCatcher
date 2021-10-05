// fetching dreams from backend
export const fetchDreams = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/dreams')
        .then(resp => resp.json())
        .then(dreams => {
            dispatch({ type: "FETCH_DREAMS", payload: dreams }) // dispatch data to reducer
        })
    }
}

// creating a dream
export const addDream = dream => {
    return (dispatch) => {
        return fetch('http://localhost:3000/dreams', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({dream:dream})
        })
        .then(resp => resp.json())
        .then(dream => {
            dispatch({ type: "ADD_DREAM", payload: dream }) // dispatch data to reducer
        })
    }
}

// deleting a dream
export const removeDream = dreamID => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/dreams/${dreamID}`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(dream => {
            dispatch({ type: "REMOVE_DREAM", payload: dream.id }) // dispatch data to reducer
        })
    }
}

// editing a dream
export const updateDream = dream => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/dreams/${dream.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({dream: dream})
        })
            .then(resp => resp.json())
            .then(updDream => {
            dispatch({type: 'UPDATE_DREAM', payload: updDream}) // dispatch data to reducer
        })
    }
}