import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth_store"

const store = configureStore({
    reducer:{
        auth:authReducer
    },
})

export default store;

