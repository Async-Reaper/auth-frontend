import { IURL } from "./url.interface";

const domain: string =  'http://localhost:5000';

export const URL: IURL = {
    loginURL: domain + '/auth/login',
    signupURL: domain + '/auth/registration'
}