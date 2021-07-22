const dreamsReducer = (state = [], action) => {
    switch (action.type) {

        case 'FETCH_DREAMS':
            return [...action.payload]
        case 'ADD_DREAM':
            return [...state, action.payload]
        case 'REMOVE_DREAM':
            let newDreams = state.filter(dream => dream.id !== action.payload)
            return [...newDreams]
        case 'UPDATE_DREAM':
            return state.map(dream => {
                if( dream.id === action.payload.id) {
                    return action.payload
                } else {
                    return dream
                }
            })
            // OR THIS ALSO WORKS
            //let dreamsAll = state.filter(dream => dream.id !== action.payload)
            //return [...dreamsAll, action.payload]
        default:
            return state
    }
}
export default dreamsReducer;