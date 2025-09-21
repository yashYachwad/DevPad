import { configureStore } from "@reduxjs/toolkit";
import devpaReducer from './redux/devpadSlice.js'

export const store = configureStore({
reducer:{
    devpad : devpaReducer
},

})