import { configureStore } from "@reduxjs/toolkit";
import topNewsSlice from "./reducers/topNewsSlice";

const store = configureStore({
    reducer:{
        topNews:topNewsSlice,
    }
});

export default store;