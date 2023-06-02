import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Field is Required"),
    password: Yup.string().required("Field is Required"),
});

const phoneNumberRegex =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const signupValidationSchema = Yup.object().shape({
    fullname: Yup.string().required("Field is Required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Field is Required"),
    phone: Yup.string()
        .matches(phoneNumberRegex, "Invalid Phone number")
        .required("Field is Required"),
    password: Yup.string().required("Field is Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Field is Required"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
    newPassword: Yup.string().required("Field is Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords must match")
        .required("Field is Required"),
});

export const forgotPasswordValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Field is Required"),
});