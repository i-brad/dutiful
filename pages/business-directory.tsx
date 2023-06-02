import { useContactSupport } from "@api/index";
import Group5 from "@assets/Group5.svg";
import CallingIcon from "@assets/icons/Calling";
import MapIcon from "@assets/icons/Map";
import SMSTrackingIcon from "@assets/icons/SMSTracking";
import { PrimaryButton } from "@components/common/Buttons";
import { InputField } from "@components/common/Input";
import Select from "@components/common/Select";
import TextField from "@components/common/TextField";
import AppLayout from "@layouts/AppLayout";
import { Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { supportValidationSchema } from "src/schemas/contactSupport";
import { ContactSupportProps } from "types/index";

interface InfoProps {
  title: string;
  detail: string | string[];
  icon: JSX.Element;
}

const BusinessInfo = ({ title, detail, icon }: InfoProps) => {
  return (
    <div className="w-full h-[10.94rem] flex pt-[1.56rem] flex-col items-center bg-white border border-alice_blue rounded-[0.67rem]">
      <span className="flex items-center space-x-[1.22rem]">
        {icon}
        <h4 className="text-t24 text-space_cadet font-medium">{title}</h4>
      </span>
      {typeof detail === "string" ? (
        <p className="text-center text-t18 text-granite_gray mt-[1.22rem] font-medium-slim">
          {detail}
        </p>
      ) : (
        <span className="block mt-[1.22rem]">
          {detail.map((p) => (
            <p
              key={p}
              className="text-center text-t18 text-granite_gray font-medium-slim"
            >
              {p}
            </p>
          ))}
        </span>
      )}
    </div>
  );
};

function BusinessDirectory() {
  const infos = [
    {
      title: "Customer support",
      detail: "Please fill out the form below",
      icon: <SMSTrackingIcon />,
    },
    {
      title: "Business address",
      detail: [
        "Suites (C113 & C114) Akord Shopping Mall,",
        "Bogije, Elemoro, 101001,",
        "Lagos, Nigeria",
      ],
      icon: <MapIcon />,
    },
    {
      title: "Phone number",
      detail: "+234 903 921 6724",
      icon: <CallingIcon />,
    },
  ];

  const [callback, setCallback] = useState<any>(null);
  const { isLoading, mutate } = useContactSupport(callback);
  return (
    <AppLayout>
      <section className="w-full relative mt-[0.83rem] h-fit">
        <span className="block bg-regalia h-[14.89rem] w-full"></span>
        <span className="absolute top-0 left-0 block">
          <Image src={Group5} alt="decor" />
        </span>
        <div className="text-white text-center pt-[2.56rem] absolute top-0 w-full left-0">
          <h1 className="text-t36 font-Recoleta font-semibold">Get in touch</h1>
          <p className="text-t20 font-medium-slim mt-[0.44rem]">
            We are here to support you throughout the process of getting your
            business listed.
          </p>
        </div>
        <div className="grid grid-cols-3 place-content-between px-[3.58rem] w-full absolute top-[10.61rem] gap-[2rem] left-0">
          {infos.map((info) => (
            <BusinessInfo {...info} key={info.title} />
          ))}
        </div>
      </section>
      <section className="w-full max-w-[33.33rem] mx-auto mt-[10.06rem]">
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            businessType: "",
            subject: "",
            message: "",
          }}
          validationSchema={supportValidationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            let data: ContactSupportProps = {
              name: values.fullname,
              email: values.email,
              subject: values.subject,
              business_type: values.businessType,
              message: values.message,
            };
            setCallback(resetForm);
            mutate(data);
            setSubmitting(false);
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <InputField
                name="fullname"
                type="text"
                placeholder="Full name"
                classNameContainer="block mb-[1.78rem] text-t16 text-regalia font-medium"
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
                classNameContainer="block mb-[1.78rem] text-t16 text-regalia font-medium"
                className="w-full mt-[0.44rem] font-normal border-2 rounded-md bg-ghost_white border-bright_gray"
                inputMode="email"
                inputProps={{
                  className:
                    "py-[0.89rem] outline-none px-[1.33rem] bg-transparent w-full",
                }}
              />
              <InputField
                name="businessType"
                type="tel"
                placeholder="Business type (Optional)"
                classNameContainer="block mb-[1.78rem] text-t16 text-regalia font-medium"
                className="w-full mt-[0.44rem] font-normal border-2 rounded-md bg-ghost_white border-bright_gray"
                inputProps={{
                  className:
                    "py-[0.89rem] outline-none px-[1.33rem] bg-transparent w-full",
                }}
              />
              <Select
                name="subject"
                label="Subject"
                classNameContainer="block mb-[1.78rem] text-t16 text-regalia font-medium"
                className="mt-[0.44rem]"
                options={["Bug", "Service report", "Account issues", "Others"]}
                inputProps={{
                  className:
                    "py-[0.89rem] outline-none px-[1.33rem] w-full font-normal border-2 rounded-md bg-ghost_white border-bright_gray",
                }}
                onChange={(value) => setFieldValue("subject", value)}
              />
              <TextField
                name="message"
                label="Write your message"
                classNameContainer="block mb-[1.78rem] text-t16 text-regalia font-medium"
                inputProps={{
                  className:
                    "py-[0.89rem] outline-none px-[1.33rem] w-full resize-none min-h-[7.28rem] mt-[0.44rem] font-normal border-2 rounded-md bg-ghost_white border-bright_gray",
                }}
              />
              <PrimaryButton
                text={isLoading ? "Sending" : "Send message"}
                type="submit"
                disabled={isLoading}
                style={{
                  opacity: isLoading ? "0.5" : "1",
                }}
              />
            </Form>
          )}
        </Formik>
      </section>
    </AppLayout>
  );
}

export default BusinessDirectory;
