import { atom } from 'recoil';

interface passwordResetProps {
    email: string;
    otp: string
}
export const passwordResetState = atom({
    key: 'passwordResetState',
    default: {} as passwordResetProps,
});