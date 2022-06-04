import { configureStore } from "@reduxjs/toolkit";
import { nightmodeReducer } from "./nightmodeSlice";

const store = configureStore({
  reducer: {
    nightmode: nightmodeReducer,
  },
});

export default store;
