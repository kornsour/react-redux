import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

// use curly braces when using a named export
// no need for curly braces if you are using a default export

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
