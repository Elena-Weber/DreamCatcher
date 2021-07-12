//const dreamsReducer = (state = { dreams: [{id: 15, name: "Italy", description: "Cool", chosen: false}] }, action) => {
const dreamsReducer = (state = [], action) => {
    switch (action.type) {

        case 'FETCH_DREAMS':
            return [...action.payload]
        case 'ADD_DREAM':
            return [action.payload, ...state]
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