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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({dream:dream})
        })
        .then(resp => resp.json())
        .then(dream => {
            dispatch({ type: "ADD_DREAM", payload: dream })
        })
    }
}
// export const updateDream = dream => {
//     console.log('you are trying to update this dream', dream)
//     return (dispatch) => {
//         return fetch(`http://localhost:3000/dreams/${dream.id}`, {
//             method: 'PATCH',
//             headers: { 
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(dream)
//         })
//             .then(resp => resp.json())
//             .then(dream => {
//             dispatch({type: 'UPDATE_DREAM', payload: dream})
//         })
//     }
// }
export const updateDream = dream => {
    console.log('you are trying to update this dream', dream)
    return dispatch => {
    dispatch({type: 'UPDATE_DREAM', payload: dream})
    fetch(`http://localhost:3000/dreams/${dream.id}`, {
    method: 'PATCH',
    body: JSON.stringify(dream),
    headers: { 'Content-Type': 'application/json'}
    })
    }
    }
export const removeDream = dreamID => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/dreams/${dreamID}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(dream => {
            dispatch({ type: "REMOVE_DREAM", payload: dream.id })
        })
    }
}

export const toggleDream = dreamID => {
    console.log('you clicked a box with id', dreamID)
//     return (dispatch) => {
//         return fetch(`http://localhost:3000/dreams/${dreamID}`,{
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(resp => resp.json())
//         .then(dream => {
//             dispatch({ type: "TOGGLE_DREAM", payload: dream.id })
//         })
//     }
}

