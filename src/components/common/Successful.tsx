import Checked from "@assets/icons/Checked";
import SuccessIcon from "@assets/icons/Success";
import { verifyOtpState } from "@atoms/verifyOtpState";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";
import { PrimaryButton } from "./Buttons";

function Successful() {
  const router = useRouter();
  const { email } = useRecoilValue(verifyOtpState);
  const handleRouting = () => {
    router.push("/auth/verify");
  };
  return (
    <div className="w-full max-w-[27rem] mx-auto grid place-items-center pt-[3.39rem]">
      <span className="w-[8rem] h-[8rem] rounded-full bg-magnolia mb-[0.89rem] grid place-items-center">
        <span className="block relative">
          <SuccessIcon />
          <span className="block absolute -top-[0.35rem] right-0">
            <Checked />
          </span>
        </span>
      </span>
      <p className="text-t16 text-center font-medium-slim text-dim_gray mb-[2.06rem] max-w-[25.67rem]">
        An OTP code has been sent to{" "}
        <span className="font-medium">{email}</span>. Check your email to get
        the code
      </p>
      <PrimaryButton text={"Next"} type="button" onClick={handleRouting} />
    </div>
  );
}

export default Successful;
