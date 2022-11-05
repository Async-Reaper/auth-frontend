import axios from "axios";
import { authFetch, authSuccess, setLoginStatus } from "../../store/slices/auth/auth.slice";
import { AppDispatch } from "../../store/store";
import { IUserLogin } from "../../types/userTypes/IUserLogin";
import { URL } from "../../utils/constants/url.constants";

export const loginUser = (data: IUserLogin) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(authFetch())
            const response = await axios.post(URL.loginURL, data)
            const result = response.data;
            dispatch(authSuccess(result.message))
            dispatch(setLoginStatus(true))
            localStorage.setItem('token', result.token)            
        } catch (error) {
            console.log(error)
        }
    }
}