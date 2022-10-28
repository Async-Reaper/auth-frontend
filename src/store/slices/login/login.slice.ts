import { createSlice } from "@reduxjs/toolkit";
import { ILoginSlice } from "./login.types";

const initialState: ILoginSlice = {
    loading: false,
    success: false,
    error: false,
    answerSuccess: '',
    answerError: ''
}

const loginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        loginFetch(state) {
            state.loading = true;
            state.success = false;
            state.error = false;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.error = false;
            state.success = true;
            state.answerSuccess = action.payload;
        },
        loginError(state, action) {
            state.loading = false;
            state.error = true;
            state.success = false;
            state.answerError = action.payload;
        }
    }
})

export default loginSlice.reducer;
export const { loginFetch, loginSuccess, loginError } = loginSlice.actions;