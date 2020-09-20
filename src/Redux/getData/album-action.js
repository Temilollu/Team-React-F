

 const fetchingStart = () => ({
     type : 'FETCHING_START'
 })

 const fetchingSuccess = album => ({
     type : 'FETCHING_SUCCESS',
     payload : album
 })

 const fetchingTrackSuccess = album => ({
    type : 'FETCHING_TRACK_SUCCESS',
    payload : album
})

 const fetchingFailure = error => ({
    type : 'FETCHING_FAILURE',
    payload : error
 })

 export const  isFetchingAsync =  () => {
     return  dispatch => {
          dispatch(fetchingStart())
       async function fetchData (){
        try {
            let albums = await fetch( "https://api.jamendo.com/v3.0/albums/tracks/?client_id=d5d26306&limit=all")           
                const albumResponseJson = await albums.json();
             dispatch(fetchingSuccess(albumResponseJson.results))
        }
        catch(error){
            dispatch(fetchingFailure(error))
        }
        }
       
        fetchData()
    }
 }

 export const isFetchingTracks = () => {
    return  dispatch => {
        dispatch(fetchingStart())
     async function fetchData (){
      try {
          let albums = await fetch( "https://api.jamendo.com/v3.0/tracks/?client_id=d5d26306&limit=all")           
              const albumResponseJson = await albums.json();
           dispatch(fetchingTrackSuccess(albumResponseJson.results))
      }
      catch(error){
          dispatch(fetchingFailure(error))
      }
      }
     
      fetchData()
  }
 }