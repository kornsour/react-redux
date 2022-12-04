import jsonPlaceHolder from "../apis/jsonPlaceholder";

// defining a function that returns a function
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
