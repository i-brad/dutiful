import { useForgotPassword } from "@api/authentication";
import MessageIcon from "@assets/icons/Message";
import { verifyOtpState } from "@atoms/verifyOtpState";
import { PrimaryButton } from "@components/common/Buttons";
import { InputField } from "@components/common/Input";
import Successful from "@components/common/Successful";
import AppLayout from "@layouts/AppLayout";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useSetRecoilState } from "recoil";
import { forgotPasswordValidationSchema } from "src/schemas/authentication";
import { forgotPassword } from "types/authentication";

function ForgotPassword() {
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();
  const setVerifyOtpState = useSetRecoilState(verifyOtpState);

  const { isLoading, mutate, isSuccess } = useForgotPassword();

  useEffect(() => {
    if (isSuccess && userEmail) {
      setVerifyOtpState({ type: "password", email: userEmail });
    }
  }, [isSuccess, router, setVerifyOtpState, userEmail]);
  const goBack = () => {
    router.back();
  };
  return (
    <AppLayout>
      <section className="w-full pt-[4.83rem] mb-[6.44rem]">
        {isSuccess ? (
          <Successful />
        ) : (
          <div className="w-full max-w-[27rem] mx-auto">
            <button
              type="button"
              onClick={goBack}
              className="border rounded-full h-[1.78rem] w-[1.78rem] border-platinum grid place-content-center mb-[2.72rem]"
            >
              <BsArrowLeft className="text-accent" />
            </button>
            <h1 className="font-semibold text-t36 text-space_cadet font-Recoleta">
              Forgot password
            </h1>
            <p className="text-t16 font-medium-slim text-dim_gray mb-[3.56rem] mt-[0.67rem]">
              Enter your email and well send you a mail on how to reset your
              password.
            </p>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={forgotPasswordValidationSchema}
              onSubmit={(values, { setSubmitting }) => {
                let data: forgotPassword = {
                  email: values.email,
                };
                setUserEmail(values.email);
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
                    endIcon={<MessageIcon />}
                  />

                  <PrimaryButton
                    text={isLoading ? "Sending" : "Send email"}
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
              Or{" "}
              <Link href="/auth/login" className="font-medium text-accent">
                Login
              </Link>
            </span>
          </div>
        )}
      </section>
    </AppLayout>
  );
}

export default ForgotPassword;
