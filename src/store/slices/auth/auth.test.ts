import loginSlice, { authError, authFetch, authSuccess, setLoginStatus } from './auth.slice';
import { IAuthSlice } from './auth.types';

describe('Testing auth slice', () => { 
    let initialState: IAuthSlice;
    let fetch: IAuthSlice;
    let success: IAuthSlice;
    let error: IAuthSlice;
    let setTrue: IAuthSlice;

    beforeEach(() => {
        initialState = {
            answerError: '',
            answerSuccess: '',
            error: false,
            success: false,
            loading: false,
            loginStatus: false
        };

        fetch = {
            answerError: '',
            answerSuccess: '',
            error: false,
            success: false,
            loading: true,
            loginStatus: false
        };

        success = {
            answerError: '',
            answerSuccess: 'Успешно',
            error: false,
            success: true,
            loading: false,
            loginStatus: true
        };

        error = {
            answerError: 'Ошибка',
            answerSuccess: '',
            error: true,
            success: false,
            loading: false,
            loginStatus: false
        }

        setTrue = {
            answerError: '',
            answerSuccess: '',
            error: false,
            success: false,
            loading: false,
            loginStatus: true
        }
    })
    test('Testing auth fetch', () => { 
        expect(loginSlice(initialState, authFetch()))
        .toEqual(fetch)
    })

    test('Testing auth success', () => { 
        expect(loginSlice(initialState, authSuccess('Успешно')))
        .toEqual(success)
    })

    test('Testing auth error', () => { 
        expect(loginSlice(initialState, authError("Ошибка")))
        .toEqual(error)
    })

    test('Testing setLoginStatus ', () => { 
        expect(loginSlice(initialState, setLoginStatus(true)))
        .toEqual(setTrue)
    })
 })