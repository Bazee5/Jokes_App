import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch a joke based on category
export const fetchjoke = createAsyncThunk(
  "joke/fetchJokeByCategory",
  async (category) => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    return response.data.value; // return the joke text
  }
);

// Initial state
const initialState = {
  joke: "No Joke",
  loading: false,
  error: null,
};

// Slice
const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchjoke.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchjoke.fulfilled, (state, action) => {
        state.joke = action.payload;
        state.loading = false;
      })
      .addCase(fetchjoke.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to fetch joke";
      });
  },
});

export default jokeSlice.reducer;
