import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "../features/name/nameSlice";

const store = configureStore({
    reducer: {
        name: nameReducer,
    }
})

export default store;