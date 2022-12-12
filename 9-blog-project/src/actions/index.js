import jsonPlaceHolder from "../apis/jsonPlaceholder";

// defining a function that returns a function
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");

  // we don't care about entire response, just the data
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
