import { createSlice } from "@reduxjs/toolkit";
import { IAuthSlice } from "./auth.types";

const initialState: IAuthSlice = {
    loading: false,
    success: false,
    error: false,
    answerSuccess: '',
    answerError: ''
}

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        authFetch(state) {
            state.loading = true;
            state.success = false;
            state.error = false;
        },
        authSuccess(state, action) {
            state.loading = false;
            state.error = false;
            state.success = true;
            state.answerSuccess = action.payload;
        },
        authError(state, action) {
            state.loading = false;
            state.error = true;
            state.success = false;
            state.answerError = action.payload;
        }
    }
})

export default authSlice.reducer;
export const { authFetch, authSuccess, authError } = authSlice.actions;