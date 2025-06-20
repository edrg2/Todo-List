import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: window.innerWidth < 768,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile } = layoutSlice.actions;
export default layoutSlice.reducer;
