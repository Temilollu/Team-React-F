import { addFavs} from './favourites-utils'

const INITIAL_STATE = {
    favourites : [],
}

  const favouritesReducer = (state = INITIAL_STATE, action) => {
      switch (action.type) {
          case 'TOGGLE_FAVOURITES':
            return {
                ...state,
                favourites : addFavs([...state.favourites], action.payload) ,
            }  
            
          default:
            return state
      }
  }
   
  export default favouritesReducer;