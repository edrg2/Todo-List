import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "../features/layout/layoutSlice";
import tasksReducer from "../features/tasks/taskSlice";
// import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    tasks: tasksReducer,
    // user: userReducer,
  },
});
