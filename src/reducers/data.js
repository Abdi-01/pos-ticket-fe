import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        listData: [],
        oldData: [],
        username: ''
    },
    reducers: {
        storeData: (state, action) => {
            console.log("data from component", action.payload);
            state.listData = action.payload;
        },
        getOldData: (state,action) => {
            state.oldData = [...state.oldData, ...action.payload];
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        }
    }
});

// Export Action Function 
export const {storeData, getOldData, setUsername} = dataSlice.actions;

// Export Reducer
export default dataSlice.reducer;