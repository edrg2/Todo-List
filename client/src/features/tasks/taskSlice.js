import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  //   status: "idle",
  //   error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
