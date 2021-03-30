export const VERFIY_LOGIN_PENDING = 'VERFIY_LOGIN_PENDING';
export const VERFIY_LOGIN_DONE= 'VERFIY_LOGIN_DONE';
export const VERFIY_LOGIN_FAIL = 'VERFIY_LOGIN_FAIL';
export const VERFIY_REGISTER_PENDING = 'VERFIY_REGISTER_PENDING';
export const VERFIY_REGISTER_DONE= 'VERFIY_REGISTER_DONE';
export const VERFIY_REGISTER_FAIL = 'VERFIY_REGISTER_FAIL';

export function verifyLoginPending() {
    return {
        type: VERFIY_LOGIN_PENDING
    }
}

export function verifyLoginSuccess(serversMsg) {
    return {
        type: VERFIY_LOGIN_DONE,
        result: serversMsg
    }
}

export function verifyLoginFail(error) {
    return {
        type: VERFIY_LOGIN_FAIL,
        error: error
    }
}


export function verifyRegisterPending() {
    return {
        type: VERFIY_REGISTER_PENDING
    }
}

export function verifyRegisterSuccess(serversMsg) {
    return {
        type: VERFIY_REGISTER_DONE,
        result: serversMsg
    }
}

export function verifyRegisterFail(error) {
    return {
        type: VERFIY_REGISTER_FAIL,
        error: error
    }
}