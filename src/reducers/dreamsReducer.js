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
            let dreamsAll = [...state]
            dreamsAll.findIndex(dream => dream.id === action.payload.id)
            return [...dreamsAll, action.payload]
        // case 'TOGGLE_DREAM':
        //     let dreamsArray = [...state]
        //     //let dreamIndex = action.payload.id
        //     let dreamToToggle = dreamsArray.find(dream => dream.id === action.payload.id)
        //     console.log(dreamToToggle)
        //     // if (dreamToToggle.chosen) {
        //     //     return !dreamToToggle
        //     // } else {
        //     //     return dreamToToggle
        //     // }
        //     // dreamsArray.findIndex(dream => dream.id === action.payload.id ? dream.chosen = !dream.chosen : dream)
        //     // dreamsArray.findIndex(dream => dream.id === action.payload.id ? dream.chosen = !dream.chosen : console.log(dream, "These are dreams that don't match id"))
        //     console.log(action.payload.id, "This is id from payload")
        //     //action.payload = dreamsArray(dreamToToggle)
        //     return [...dreamsArray]
        //     // return [...dreamsArray, dreamToToggle: !dreamToToggle.chosen]
        default:
            return state
    }
}
export default dreamsReducer;