import * as api from './api.js'

const endpoint = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout',
}

export async function login(email, password) {
    const res = await api.post(endpoint.login, { email, password })
    sessionStorage.setItem('userData', JSON.stringify(res));
    return res;
}

export async function register(email, password) {
    const res = await api.post(endpoint.register, { email, password })
    sessionStorage.setItem('userData', JSON.stringify(res));
    return res;
}
export async function logout() {
    const res = await api.get(endpoint.logout)
    sessionStorage.removeItem('userData');
    return res;
}