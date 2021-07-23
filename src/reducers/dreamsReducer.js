// const dreamarr = [
//     {id: 1, name: "One", description: "one"},
//     {id: 2, name: "Two", description: "two"},
//     {id: 3, name: "Three", description: "three"}
// ]

const dreamsReducer = (state = [], action) => {
// const dreamsReducer = (state = dreamarr, action) => {
    switch (action.type) {

        case 'FETCH_DREAMS':
            return [...action.payload]
        // case 'ADD_DREAM':
        //     return [...state, action.payload]
        // case 'REMOVE_DREAM':
        //     let newDreams = state.filter(dream => dream.id !== action.payload)
        //     return [...newDreams]
        // case 'UPDATE_DREAM':
        //     let dreamsAll = state.filter(dream => dream.id !== action.payload)
        //     return [...dreamsAll, action.payload]
        //     // OR THIS ALSO WORKS
        //     // return state.map(dream => {
        //     //     if( dream.id === action.payload.id) {
        //     //         return action.payload
        //     //     } else {
        //     //         return dream
        //     //     }
        //     // })
        default:
            return state
    }
}
export default dreamsReducer;