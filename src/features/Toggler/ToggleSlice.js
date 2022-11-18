import { createSlice } from "@reduxjs/toolkit";
const ToggleSlice = createSlice({
    name:'toggler',
    initialState:{active:true},
    reducers:{
        onoff:state=>{
            state.active=!state.active
        }
    }
})
export default ToggleSlice.reducer
export const {onoff} = ToggleSlice.actions