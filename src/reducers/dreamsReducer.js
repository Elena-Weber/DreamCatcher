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
            return [...state, action.payload]
        // case 'TOGGLE_DREAM':
        //     let newState = state.map(dream => dream.id === action.payload ? {...dream, chosen: !dream.chosen} : dream)
        //     return [...newState]
        default:
            return state
    }
}
export default dreamsReducer;