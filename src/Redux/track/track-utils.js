
export const fiterTracks = (recentTrackArray, trackToAdd) => {
    const isFav = recentTrackArray.some(val => val.id === trackToAdd.id)
    
    if(isFav){
        return recentTrackArray
    }
    
  
   return [...recentTrackArray, {...trackToAdd}]
}
