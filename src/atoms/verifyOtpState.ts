import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

interface verifyOtpProps {
    type: string;
    email: string;
    otp?: string
}
export const verifyOtpState = atom({
    key: 'verifyOtpState',
    default: {} as verifyOtpProps,
    effects_UNSTABLE: [persistAtom],
});