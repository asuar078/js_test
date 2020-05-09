// action creator

export const selectSong = (song) => {
  // return an action
  return {
    type: 'SONG_SELECTION',
    payload: song
  }
}
