import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name : ''
}

const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers : {
        updateName : (state, action) => {
            state.name = action.payload
        }
    }
})

export default nameSlice.reducer
export const {updateName} = nameSlice.actions