import { useResetPassword } from "@api/authentication";
import { verifyOtpState } from "@atoms/verifyOtpState";
import { PrimaryButton } from "@components/common/Buttons";
import { InputField } from "@components/common/Input";
import AppLayout from "@layouts/AppLayout";
import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { resetPasswordValidationSchema } from "src/schemas/authentication";
import { resetPassword } from "types/authentication";

function ResetPassword() {
  const { email, otp } = useRecoilValue(verifyOtpState);
  const { isLoading, mutate } = useResetPassword();

  return (
    <AppLayout>
      <section className="w-full pt-[4.83rem]">
        <div className="w-full max-w-[27rem] mx-auto">
          <h1 className="font-semibold text-t36 text-space_cadet font-Recoleta">
            Reset password
          </h1>
          <p className="text-t16 font-medium-slim text-dim_gray mb-[2.28rem] mt-[0.67rem]">
            Set your new password
          </p>
          <Formik
            initialValues={{ newPassword: "", confirmPassword: "" }}
            validationSchema={resetPasswordValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              let data: resetPassword = {
                email,
                otp,
                password: values.newPassword,
              };
              mutate(data);
              setSubmitting(false);
            }}
          >
            {() => (
              <Form>
                <InputField
                  name="newPassword"
                  type="password"
                  placeholder="Enter new password"
                  classNameContainer="block mb-[1.33rem] text-t16 text-regalia font-medium"
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

                <InputField
                  name="confirmPassword"
                  type="password"
                  placeholder="Re-enter new password"
                  classNameContainer="block mb-[4.39rem] text-t16 text-regalia font-medium"
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

                <PrimaryButton
                  text={isLoading ? "Resetting" : "Reset password"}
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
            <Link href="/auth/sign-up" className="font-medium text-accent">
              Create new account.
            </Link>
          </span>
        </div>
      </section>
    </AppLayout>
  );
}

export default ResetPassword;
