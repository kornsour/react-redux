// https://lodash.com/
import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

// defining a function that returns a function
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  // we don't care about entire response, just the data
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

export const fetchUser = _.memoize(function (id) {
  // without memoize, redux thunk will call this function multiple times to fetch the user
  // instead of just once which is what we want
  return async function (dispatch) {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
  };
});
