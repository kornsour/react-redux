// How do we know when we're using a named export or default export when using code from some other library?
// aka how do I know when to use curly braces or not with my imports?
// Only way to know is to read their documentation
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Eye of the Tiger", duration: "3:45" },
    { title: "Take On Me", duration: "3:49" },
    { title: "Girls Just Want To Have Fun", duration: "3:58" },
    { title: "Push It!", duration: "4:32" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
