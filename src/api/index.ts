import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { ContactSupportProps, IError } from "types/index";
import { instance } from "./httpConfig";
import BACKEND_URLS from "./urls";

export const useContactSupport = (callback: any) => {
    return useMutation(
        (values: ContactSupportProps) => {
            return instance
                .post(BACKEND_URLS.auth.support, values)
                .then((res) => res.data)
                .catch((err) => {
                    throw err.response.data;
                });
        },
        {
            onSuccess: (data) => {
                // console.log(data)
                toast.success(data.message);
                if (callback) {
                    callback()
                }
            },
            onError: (err: IError) => {
                toast.error(err.message);
            },
        },
    );
}