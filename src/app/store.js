import { configureStore } from "@reduxjs/toolkit";
import toggly from "../features/Toggler/ToggleSlice"
const store = configureStore({
    reducer:{
        togs:toggly
    }
})
export default store;