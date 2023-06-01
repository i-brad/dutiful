import { useLogin } from "@api/authentication";
import { PrimaryButton } from "@components/common/Buttons";
import { InputField } from "@components/common/Input";
import AppLayout from "@layouts/AppLayout";
import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { LoginDetails } from "types/authentication";
import * as Yup from "yup";

function Login() {
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Field is Required"),
    password: Yup.string().required("Field is Required"),
  });

  const { isLoading, mutate } = useLogin();

  return (
    <AppLayout>
      <section className="w-full pt-[4.83rem]">
        <div className="w-full max-w-[27rem] mx-auto">
          <p className="text-t16 font-medium-slim font-CircularStd text-dim_gray">
            Jump right back in
          </p>
          <h1 className="font-semibold text-t36 text-space_cadet font-Recoleta mb-[2.28rem]">
            Login
          </h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              let data: LoginDetails = {
                email: values.email,
                password: values.password,
              };
              mutate(data);
              setSubmitting(false);
            }}
          >
            {() => (
              <Form>
                <InputField
                  name="email"
                  type="email"
                  placeholder="Email"
                  classNameContainer="block mb-[1.33rem] text-t16 text-regalia font-medium"
                  className="w-full mt-[0.44rem] font-normal border-2 rounded-md bg-ghost_white border-bright_gray"
                  inputMode="email"
                  inputProps={{
                    className:
                      "py-[0.89rem] outline-none px-[1.33rem] bg-transparent w-full",
                  }}
                />

                <InputField
                  name="password"
                  type="password"
                  placeholder="Password"
                  classNameContainer="block mb-[0.53rem] text-t16 text-regalia font-medium"
                  className="w-full mt-[0.44rem] font-normal border-2 rounded-md bg-ghost_white border-bright_gray"
                  inputProps={{
                    className:
                      "py-[0.89rem] outline-none px-[1.33rem] bg-transparent w-full",
                  }}
                  inputMode="password"
                  endIcon={
                    <AiOutlineEye className="w-5 h-5 cursor-pointer text-medium_purple" />
                  }
                />
                <Link
                  href="/auth/forgot-password"
                  className="text-t14 text-medium_purple font-medium-slim tracking-[-0.01rem] block mr-0 ml-auto w-fit mb-[2.44rem]"
                >
                  Forgot password?
                </Link>
                <PrimaryButton
                  text={isLoading ? "Logging you in" : "Log In"}
                  type="submit"
                  disabled={isLoading}
                  style={{
                    opacity: isLoading ? "0.5" : "1",
                  }}
                />
              </Form>
            )}
          </Formik>
          <span className="block mx-auto w-fit text-t16 font-medium-slim tracking-[-0.005em] text-crayola mt-[1.33rem]">
            Don&apos;t have an account?{" "}
            <Link href="/auth/sign-up" className="font-medium text-accent">
              Sign Up
            </Link>
          </span>
        </div>
      </section>
    </AppLayout>
  );
}

export default Login;
