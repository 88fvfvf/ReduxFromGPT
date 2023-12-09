import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../features/slice"
import inputSlice from "../features/Advanced"
import { postSlice } from "../features/Post/PostSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        inputSlice: inputSlice,
        post: postSlice.reducer,
    },
});

export default store;
