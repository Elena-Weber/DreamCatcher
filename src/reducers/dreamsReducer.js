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
            //let dreamToToggle = 
            dreamsArray.findIndex(dream => dream.id === action.payload ? dream.chosen = !dream.chosen : dream)
            console.log(action.payload.chosen)
            //action.payload = dreamsArray(dreamToToggle)
            return [...dreamsArray]
        case 'SEARCH_DREAMS':
            console.log(state)
            let value = action.payload.value;
            if (value) {
                let filteredValues = state.filter(dream => {
                //console.log(dream.name)
                    return dream.name.toLowerCase().startsWith(value)
                    // || dream.description.toLowerCase().startsWith(value);
                    })
                console.log(filteredValues)
                return [filteredValues]
            } else {
                return state
            }
        default:
            return state
    }
}
export default dreamsReducer;