import {configureStore} from "@reduxjs/toolkit";
import  authReducer  from "./users";


const globalStore = configureStore ({
    reducer: {
        auth: authReducer
    }
})

export default globalStore;