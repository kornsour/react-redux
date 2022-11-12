// Action creator

// named export allows us to export many different functions from a file
export const selectSong = (song) => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
