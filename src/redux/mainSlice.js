import { createSlice, nanoid } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {hello:""},
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
     
    },
    // Код решти редюсерів
  },
});
export const mainReducer=mainSlice.reducer