// store.jsx
import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from "./JokeSlice";

const store = configureStore({
  reducer: {
    joke: jokeReducer,
  },
});

export default store;
