import axios from "axios";
import { loginError, loginFetch, loginSuccess } from "../../store/slices/login/login.slice";
import { AppDispatch } from "../../store/store";
import { IUserLogin } from "../../types/userTypes/IUserLogin";
import { URL } from "../../utils/constants/url.constants";

export const auth = (data: IUserLogin) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(loginFetch())
            const response = await axios.post(URL.login, data)
            const result = response.data;
            dispatch(loginSuccess(result.message))
            
            console.log(result)
        } catch (error) {
            dispatch(loginError(error))
            console.log(error)
        }
    }
}