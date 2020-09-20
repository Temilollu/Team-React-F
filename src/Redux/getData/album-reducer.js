
const INITIAL_STATE = {
    albumData: [],
    trackData : [],
    isFetching : false,
    errorMessage : undefined
}

const getDataReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'FETCHING_START':
            return {
                ...state,
                isFetching : true
            }
            case 'FETCHING_SUCCESS':
                return {
                    ...state,
                    isFetching : false,
                    albumData : action.payload
                }
                case 'FETCHING_TRACK_SUCCESS':
                    return {
                        ...state,
                        isFetching : false,
                        trackData : action.payload
                    } 
                case 'FETCHING_FAILURE':
                    return {
                        ...state,
                        isFetching : false,
                        errorMessage : action.payload
                    }
                    
    
        default:
        return state
    }
}

export default getDataReducer