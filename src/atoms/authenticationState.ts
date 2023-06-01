import { atom } from 'recoil';

interface AuthStateProps {
    isLoggedIn: boolean;
    emailVerified?: boolean;
}

export const AuthState = atom({
    key: 'authState',
    default: { isLoggedIn: false, emailVerified: false } as AuthStateProps
});