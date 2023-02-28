import {configureStore} from "@reduxjs/toolkit";
import  authReducer  from "./users";


const globalStore = configureStore ({
    reducer: {
        authReducer
    }
})

export default globalStore;