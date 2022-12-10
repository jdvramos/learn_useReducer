// 1.) Import useReducer and useEffect
import { useReducer, useEffect } from "react";
import axios from "axios";

// 2.) Create initial (default) state as object
const initialState = {
  loading: true,
  error: "",
  post: {},
};

// 3.) Create reducer. Notice that like the initialState our action is also an object
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, post: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, post: {}, error: "Something went wrong" };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  // 4.) Invoke useReducer and pass in the reducer and initial state.
  // 5.) It will return the state and a dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  // 6. Use useEffect to fetch data from API
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        // 7.) If fulfilled, pass in the appropriate type and pass response.data to as payload
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((err) => {
        // 8.) If rejected, just pass the type, other properties already set in switch/case
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  // 9.) Use the current state to display the loading message first and then the post title
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;

// Fetching data with useReducer Part 2

// Compare the DataFetchingOne which uses useState and useEffect with this one that uses useReducer and useEffect
