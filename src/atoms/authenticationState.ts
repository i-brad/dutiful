import { atom } from 'recoil';

export const AuthState = atom({
    key: 'authState',
    default: { isLoggedIn: false }
});