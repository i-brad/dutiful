import AppLayout from "@layouts/AppLayout";
import React from "react";

function BusinessDirectory() {
  return (
    <AppLayout>
      <section className="w-full relative mt-[0.83rem]">
        <div className="bg-regalia h-[14.89rem] w-full text-white text-center grid place-content-center">
          <h1 className="text-t36 font-Recoleta font-semibold">Get in touch</h1>
          <p className="text-t20 font-medium-slim mt-[0.44rem]">
            We are here to support you throughout the process of getting your
            business listed.
          </p>
        </div>
      </section>
    </AppLayout>
  );
}

export default BusinessDirectory;
