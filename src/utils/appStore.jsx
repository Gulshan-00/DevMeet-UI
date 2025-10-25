import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "./userSlice";
import feedReducer from "./feedStore";

const appStore = configureStore({
    reducer:{
          user: userReducer,
          feed: feedReducer,
    }
});

export default appStore;