import {
  useEmailVerify,
  useForgotPassword,
  usePasswordResetVerifyOtp,
  useResendOtp,
} from "@api/authentication";
import { AuthState } from "@atoms/authenticationState";
import { verifyOtpState } from "@atoms/verifyOtpState";
import { PrimaryButton } from "@components/common/Buttons";
import AppLayout from "@layouts/AppLayout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useRecoilState, useRecoilValue } from "recoil";

function Verify() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState();
  const [{ email, type }, setVerifyOtpState] = useRecoilState(verifyOtpState);
  const { isLoggedIn } = useRecoilValue(AuthState);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (!isLoggedIn && type === "email") {
      router.push("/auth/login");
      return;
    }
    setUserEmail(email);
  }, [email, isLoggedIn, router, type]);

  const { isLoading: resending, mutate: resendOtp } = useResendOtp();
  //otp resend for password reset
  const { isLoading: resendingOtp, mutate: resendResetOtp } =
    useForgotPassword();
  const { isLoading, mutate: verify } = useEmailVerify();
  const {
    isLoading: resetVerifying,
    mutate: passwordResetVerify,
    isSuccess,
  } = usePasswordResetVerifyOtp();

  useEffect(() => {
    if (isSuccess && type === "password") {
      setVerifyOtpState({ type, email, otp });
      router.push("/auth/reset-password");
      return;
    }
  }, [email, isSuccess, router, type, setVerifyOtpState, otp]);

  const otpResendHandler = () => {
    if (type === "password") {
      resendResetOtp({ email });
      return;
    }
    resendOtp();
  };

  const handleVerification = () => {
    if (type === "password") {
      passwordResetVerify({ otp, email });
      return;
    }
    verify({ otp });
  };

  if (!isLoggedIn && type === "email") {
    return <div></div>;
  }

  return (
    <AppLayout>
      <section className="w-full pt-[4.83rem]">
        <div className="w-full max-w-[27rem] mx-auto grid place-items-center pt-[3.39rem]">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            containerStyle={{
              display: "grid",
              gridTemplateColumns: "repeat(6,1fr)",
              placeItems: "center",
              width: "100%",
              marginBottom: "1.78rem",
            }}
            inputStyle={{
              width: "4.17rem",
              height: "4.17rem",
              borderWidth: "2px",
              borderColor: "#B6B6E5",
              backgroundColor: "#F3F3F3",
              borderRadius: "0.56rem",
              outline: "none",
            }}
            inputType="number"
            renderInput={(props) => <input {...props} />}
          />
          <p className="text-t16 text-center font-medium-slim text-dim_gray mb-[2.06rem] max-w-[25.67rem]">
            An OTP code has been sent to{" "}
            <span className="font-medium">{userEmail}</span>. Check your email
            to get the code
          </p>
          <PrimaryButton
            text={isLoading ? "Verifying" : "Confirm OTP"}
            type="button"
            disabled={
              otp.length < 6 ||
              isLoading ||
              resetVerifying ||
              resendingOtp ||
              resending
            }
            style={{
              opacity:
                otp.length < 6 ||
                resending ||
                isLoading ||
                resetVerifying ||
                resendingOtp
                  ? "0.5"
                  : "1",
            }}
            onClick={handleVerification}
          />
          <span className="block mx-auto w-fit text-t16 font-medium-slim tracking-[-0.005em] text-crayola mt-[1.33rem]">
            Didn&apos;t get a code?{" "}
            <button
              className="font-medium text-accent"
              disabled={resending || resendingOtp}
              onClick={otpResendHandler}
            >
              Resend
            </button>
          </span>
        </div>
      </section>
    </AppLayout>
  );
}

export default Verify;
