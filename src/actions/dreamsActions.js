export const fetchDreams = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/dreams')
        .then(resp => resp.json())
        .then(dreams => {
            dispatch({ type: "FETCH_DREAMS", payload: dreams })
        })
    }
}

export const addDream = dream => {
    return (dispatch) => {
        return fetch('http://localhost:3000/dreams', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({dream:dream})
        })
        .then(resp => resp.json())
        .then(dream => {
            dispatch({ type: "ADD_DREAM", payload: dream })
        })
    }
}

export const removeDream = dreamID => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/dreams/${dreamID}`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(dream => {
            dispatch({ type: "REMOVE_DREAM", payload: dream.id })
        })
    }
}

export const updateDream = dream => {
    console.log('you are trying to update this dream', dream)
    return (dispatch) => {
        return fetch(`http://localhost:3000/dreams/${dream.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({dream: dream})
        })
            .then(resp => resp.json())
            .then(dream => {
            dispatch({type: 'UPDATE_DREAM', payload: dream})
        })
    }
}

export const toggleDream = dream => {
    console.log('you clicked a dream', dream)
    return (dispatch) => {
        return fetch(`http://localhost:3000/dreams/${dream.id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({dream: dream})
        })
            .then(resp => resp.json())
            .then(dream => {
            dispatch({ type: "TOGGLE_DREAM", payload: dream })
        })
    }
}

export const searchDreams = payload => {
    return (dispatch) => {
    console.log(payload.value)
    dispatch({ type: "SEARCH_DREAMS", payload })
}}