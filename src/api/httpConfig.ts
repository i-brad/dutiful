import axios from 'axios';
import Cookies from 'js-cookie';

import BackendUrls from '@api/urls';
import config from '@utils/config';

export const configOptions = () => {
    if (typeof window === 'undefined') return {};

    if (!Cookies.get(config.key.token)) return {};

    const accessToken = Cookies.get(config.key.token);

    if (!!accessToken) {
        return {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        };
    }
};

// persist user details

export const userOptions = () => {
    if (typeof window === 'undefined') return {};

    if (!localStorage.getItem(config.key.user)) return {};

    const getUser = localStorage.getItem(config.key.user) as string
    const user = JSON.parse(getUser);

    if (!!user) {
        return {
            ...user,
        };
    }
};
export const instance = axios.create({
    baseURL: BackendUrls.baseURl,
});
