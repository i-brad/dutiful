import * as Yup from "yup";

export const supportValidationSchema = Yup.object().shape({
    fullname: Yup.string().required("Field is Required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Field is Required"),
    businessType: Yup.string(),
    subject: Yup.string().required("Field is Required"),
    message: Yup.string().required("Field is Required"),
});