import axios from "axios"
import { authFetch } from "../../store/slices/auth/auth.slice"
import { AppDispatch } from "../../store/store"
import { IUserSignup } from "../../types/userTypes/IUserSignup"
import { URL } from "../../utils/constants/url.constants"

export const signupUser = (data: IUserSignup) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(authFetch())
            const response = await axios.post(URL.signupURL, data);
            const res = response.data;
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
}