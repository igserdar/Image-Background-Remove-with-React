import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bgRemoved: null
}

const removeBackground = createSlice({
    name: 'removeBg',
    initialState,
    reducers: {
        setActionStatus: (state, action ) => {
            return { ...state, bgRemoved: action.payload };
        },
    },
});

export const { setActionStatus } = removeBackground.actions;
export default removeBackground.reducer;