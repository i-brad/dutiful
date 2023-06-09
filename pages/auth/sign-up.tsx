import { useSignup } from "@api/authentication";
import ProfileIcon from "@assets/icons/Profile";
import StoreIcon from "@assets/icons/Store";
import { PrimaryButton } from "@components/common/Buttons";
import { CheckBox, InputField } from "@components/common/Input";
import Successful from "@components/common/Successful";
import AppLayout from "@layouts/AppLayout";
import { Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { signupValidationSchema } from "src/schemas/authentication";
import { SignupDetails } from "types/authentication";

interface UserTypeProps {
  type: string;
  icon: JSX.Element;
  selected: boolean;
  onClick: () => void;
}

const UserType = ({ type, icon, selected, onClick }: UserTypeProps) => {
  return (
    <span
      onClick={onClick}
      className={`relative flex items-center justify-between w-fit space-x-[1.2rem] cursor-pointer max-w-full border rounded-[0.61rem] ${
        selected
          ? "border-accent text-dark_purple"
          : "border-alice_blue text-pastel_blue"
      } px-[1rem] py-[1.52rem]`}
    >
      {icon}
      <span className="font-medium text-t20">{type}</span>
      {selected && (
        <span className="absolute -top-5 -right-4 grid place-content-center bg-accent w-[2.11rem] h-[2.11rem] rounded-full">
          <BsCheckLg className="text-white w-5 h-5" />
        </span>
      )}
    </span>
  );
};

function SignUp() {
  const [checked, setChecked] = useState(false);
  const [userType, setUserType] = useState("Regular user");

  const { isLoading, mutate, isSuccess } = useSignup();

  const checkBoxHandler = () => {
    setChecked(!checked);
  };
  return (
    <AppLayout>
      <section className="w-full pt-[4.83rem] mb-[4.56rem]">
        {isSuccess ? (
          <Successful />
        ) : (
          <div className="w-full max-w-[27rem] mx-auto">
            <p className="text-t16 font-medium-slim text-dim_gray">
              Sign up for free!
            </p>
            <h1 className="font-semibold text-t36 text-space_cadet font-Recoleta mb-[2.17rem]">
              Get started
            </h1>
            <div className="flex items-center justify-between mb-[3.72rem] space-x-[2.06rem]">
              <UserType
                type="Regular user"
                icon={
                  <ProfileIcon
                    color={userType === "Regular user" ? "#603F8B" : "#B1BDCA"}
                  />
                }
                selected={userType === "Regular user"}
                onClick={() => setUserType("Regular user")}
              />
              <UserType
                type="Service provider"
                icon={
                  <StoreIcon
                    color={
                      userType === "Service provider" ? "#603F8B" : "#B1BDCA"
                    }
                  />
                }
                selected={userType === "Service provider"}
                onClick={() => setUserType("Service provider")}
              />
            </div>
            <Formik
              initialValues={{
                fullname: "",
                email: "",
                phone: "",
                password: "",
              }}
              validationSchema={signupValidationSchema}
              onSubmit={(values, { setSubmitting }) => {
                let data: SignupDetails = {
                  user: userType,
                  name: values.fullname,
                  email: values.email,
                  phone: values.phone,
                  password: values.password,
                };
                mutate(data);
                setSubmitting(false);
              }}
            >
              {() => (
                <Form>
                  <InputField
                    name="fullname"
                    type="text"
                    placeholder="Full name"
                    classNameContainer="block mb-[1.33rem] text-t16 text-regalia font-medium"
                    className="w-full mt-[0.44rem] font-normal border-2 rounded-md bg-ghost_white border-bright_gray"
                    inputProps={{
                      className:
                        "py-[0.89rem] outline-none px-[1.33rem] bg-transparent w-full",
                    }}
                  />
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
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    classNameContainer="block mb-[1.33rem] text-t16 text-regalia font-medium"
                    className="w-full mt-[0.44rem] font-normal border-2 rounded-md bg-ghost_white border-bright_gray"
                    inputProps={{
                      className:
                        "py-[0.89rem] outline-none px-[1.33rem] bg-transparent w-full",
                    }}
                  />

                  <InputField
                    name="password"
                    type="password"
                    placeholder="Password"
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
                    placeholder="Re-enter password"
                    classNameContainer="block mb-[0.89rem] text-t16 text-regalia font-medium"
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
                  <span className="flex items-center text-t14 mb-[3.56rem] space-x-[0.56rem]">
                    <CheckBox
                      name="agree to terms"
                      checked={checked}
                      handleCheck={checkBoxHandler}
                    />
                    <span className="text-charcoal">
                      I agree to Dutiful&apos;s&nbsp;
                      <Link
                        href="/terms"
                        className="text-medium_purple underline font-medium-slim tracking-[-0.01rem]"
                      >
                        terms and conditions
                      </Link>
                    </span>
                  </span>
                  <PrimaryButton
                    text={isLoading ? "Signing you up" : "Sign up"}
                    type="submit"
                    disabled={isLoading || !checked}
                    style={{
                      opacity: isLoading || !checked ? "0.5" : "1",
                    }}
                  />
                </Form>
              )}
            </Formik>
            <span className="block mx-auto w-fit text-t16 font-medium-slim tracking-[-0.005em] text-crayola mt-[1.33rem]">
              Already have an account?{" "}
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

export default SignUp;
