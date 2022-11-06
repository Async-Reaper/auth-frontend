import { createSlice } from "@reduxjs/toolkit";
import { IAuthSlice } from "./auth.types";

const initialState: IAuthSlice = {
    loading: false,
    success: false,
    error: false,
    answerSuccess: '',
    answerError: '',
    loginStatus: false
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
            state.loginStatus = true;
            state.answerSuccess = action.payload;
        },
        authError(state, action) {
            state.loading = false;
            state.error = true;
            state.success = false;
            state.answerError = action.payload;
        },
        setLoginStatus(state, action) {
            state.loginStatus = action.payload
        }
    }
})

export default authSlice.reducer;
export const { authFetch, authSuccess, authError, setLoginStatus } = authSlice.actions;