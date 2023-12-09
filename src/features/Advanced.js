import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
    file: ''
}

const inputSlice = createSlice({
    name: 'inputSlice',
    initialState,
    reducers: {
        enterText: (state,action) => {
            state.value = action.payload
        },
    }
})

export const { enterText, fileInput }  = inputSlice.actions
export default inputSlice.reducer