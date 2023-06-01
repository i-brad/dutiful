import { atom } from 'recoil';

interface userProps {
    [x: string]: any;
}
export const userState = atom({
    key: 'userState',
    default: {} as userProps,
});