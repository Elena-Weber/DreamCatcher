const dreamsReducer = (state = { dreams: [] }, action) => {
    switch (action.type) {

        case 'FETCH_DREAMS':
            return [...action.payload]
        case 'ADD_DREAM':
            return [...state, action.payload]
        case 'REMOVE_DREAM':
            let newDreams = state.filter(dream => dream.id !== action.payload)
            return [...newDreams]
        // case 'EDIT_DREAM':
        //     return [...action.payload]    
        default:
            return state
    }
}
export default dreamsReducer;