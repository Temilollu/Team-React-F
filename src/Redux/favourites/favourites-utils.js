
export const addFavs = (favouritesArray, favToAdd) => {
  let arr =  favouritesArray.find(fav => fav.id === favToAdd.id)
  if(!arr){
    favouritesArray.push(favToAdd)  
  }
  else {
     let arrIndex = favouritesArray.indexOf(arr)
     favouritesArray.splice(arrIndex,1)
  }
  
  return favouritesArray
}