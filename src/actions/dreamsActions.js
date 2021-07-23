// export const fetchDreams = () => {
//     return (dispatch) => {
//         return fetch('http://localhost:3000/dreams')
//         .then(resp => resp.json())
//         .then(dreams => {
//             dispatch({ type: "FETCH_DREAMS", payload: dreams })
//         })
//     }
// }

let fetchDreamsURL = () => fetch("http://localhost:3000/dreams");
let fetchDreamsFunc = async dispatch => {
        const response = await fetchDreamsURL();
        const res = await response.json();
        console.log(res);
        dispatch({ type: 'FETCH_DREAMS', payload: res });
};
export const fetchDreams = dispatch => {
    return () => fetchDreamsFunc(dispatch)
}

// export const addDream = dream => {
//     return (dispatch) => {
//         return fetch('http://localhost:3000/dreams', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({dream:dream})
//         })
//         .then(resp => resp.json())
//         .then(dream => {
//             dispatch({ type: "ADD_DREAM", payload: dream })
//         })
//     }
// }

// export const removeDream = dreamID => {
//     return (dispatch) => {
//         return fetch(`http://localhost:3000/dreams/${dreamID}`,{
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(resp => resp.json())
//         .then(dream => {
//             dispatch({ type: "REMOVE_DREAM", payload: dream.id })
//         })
//     }
// }

// export const updateDream = dream => {
//     return (dispatch) => {
//         return fetch(`http://localhost:3000/dreams/${dream.id}`, {
//             method: 'PATCH',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({dream: dream})
//         })
//             .then(resp => resp.json())
//             .then(updDream => {
//             dispatch({type: 'UPDATE_DREAM', payload: updDream})
//         })
//     }
// }