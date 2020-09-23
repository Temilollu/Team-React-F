import { createSelector } from 'reselect';

export  const selectAlbum = state => state.getData.albumData
// [0].results

  const selectTracks = state => state.currentTrackArray.recentTracks

 export const selectAlbumItems = createSelector(
    [selectAlbum],
   album => album.map(alb => alb.tracks)
)

export const filterAlbums = createSelector(
  [selectAlbum],
   album => album.filter((a,id) => id > 25 )
)

export const selectRecentTracks = createSelector(
  [selectTracks],
  track => {

    if(track.length > 10){
      track.splice(0, track.length - 10)
      return track.map(x => x).reverse()
    }
    return track.map(x => x).reverse()
   }
 )

export const selectAlbumItemstracks = createSelector(
    [selectAlbumItems],
    album => {
    let collectedTracks = []
    album.forEach((track) => {
        for (let i = 0; i < track.length; i++) {
          collectedTracks.push(track[i]);
        }
      })
      return collectedTracks
    }
)

