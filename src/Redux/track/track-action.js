

 const getCurrentTrack = track => ({
 type : 'SELECT_CURRENT_TRACK',
 payload : track
})

  export const AddToRecent = (recent) => ({
    type : 'ADD_RECENT_TRACK',
    payload : recent
  })


  // export const addSuccess = () => ({
  //   type : 'REMOVE_FAV',
  //  })

  //   export const toggler = () => ({
  //     type : 'TOGGLE_STATE'
  //   })


  //   export const isAddingAsync = (val) => {
  //     return dispatch => {
    
  //       if(!val){
  //            dispatch(addSuccess())
  //       }
  //       else{
  //             dispatch(startAdding())
  //       }
     
  //     }
  //   }

export default getCurrentTrack