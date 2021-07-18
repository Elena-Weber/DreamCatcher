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
            // let dreamIndex = 
            dreamsAll.findIndex(dream => dream.id === action.payload.id)
            // dreamsAll(dreamIndex) = action.payload
            console.log(dreamsAll, action.payload)
            return [...dreamsAll, action.payload]
        case 'TOGGLE_DREAM':
            let dreamsArray = [...state]
            //let dreamIndex = action.payload.id
            let dreamToToggle = dreamsArray.find(dream => dream.id === action.payload.id)
            console.log(dreamToToggle)
            // if (dreamToToggle.chosen) {
            //     return !dreamToToggle
            // } else {
            //     return dreamToToggle
            // }
            // dreamsArray.findIndex(dream => dream.id === action.payload.id ? dream.chosen = !dream.chosen : dream)
            // dreamsArray.findIndex(dream => dream.id === action.payload.id ? dream.chosen = !dream.chosen : console.log(dream, "These are dreams that don't match id"))
            console.log(action.payload.id, "This is id from payload")
            //action.payload = dreamsArray(dreamToToggle)
            return [...dreamsArray]
        // case 'SEARCH_DREAMS':
        //     console.log(state)
        //     let searchTerm = action.payload.value;
        //     let stateCopy = [...state]
        //     if (searchTerm) {
        //         let filteredValues = stateCopy.filter(dream => {
        //         console.log(dream.name)
        //         let dreamToCheck = dream.name.toLowerCase().startsWith(searchTerm)
        //         console.log(dreamToCheck)
        //             return dream.name.toLowerCase().startsWith(searchTerm)
        //             // || dream.description.toLowerCase().startsWith(value);
        //             })
        //         console.log(filteredValues)
        //         return [filteredValues]
        //     } else {
        //         return state
        //     }
        default:
            return state
    }
}
export default dreamsReducer;