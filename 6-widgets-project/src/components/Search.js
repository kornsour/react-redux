import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  // debounced term is going to be our "time-lagged" search term
  // debounced means setting up a timer to change something
  // and then cancelling if we make another change too soon
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // set a timer to update 'debouncedTerm'
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    // clear timeout if term changes
    return () => {
      clearTimeout(timerId);
    };
    // watching for changes to term
  }, [term]);

  // this piece of state will have our initial data fetch request
  // second argument of useEffect controls when the code inside gets executed
  useEffect(() => {
    // can't use async directly inside a useEffect function
    // so we create a function inside and then call it
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    }
    // only want to run when component is first rendered
    // or when debouncedTerm changes
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
