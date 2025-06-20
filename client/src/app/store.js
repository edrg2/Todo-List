import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "../features/layout/layoutSlice";
// import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    // user: userReducer,
  },
});
