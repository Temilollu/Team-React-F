import { fiterTracks} from './track-utils'

const INITIAL_STATE = {
    currentTrack : 0,
    recentTracks : []
}

 const trackReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
       case 'SELECT_CURRENT_TRACK':
         return{
             ...state,
             currentTrack : action.payload
         }
         case 'ADD_RECENT_TRACK':
          return{
              ...state,
              recentTracks : fiterTracks([...state.recentTracks],action.payload)
          }
                    
       default:
       return state
   }
}

export default trackReducer