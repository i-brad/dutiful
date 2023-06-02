import PricingCard from "@components/Pricing/PricingCard";
import PlanTable from "@components/Pricing/Table";
import { pricing } from "@data/pricing";
import AppLayout from "@layouts/AppLayout";
import React from "react";

function Pricing() {
  return (
    <AppLayout>
      <section className="pt-[4.56rem] grid place-content-center text-center">
        <h1 className="text-t36 font-Recoleta text-space_cadet font-semibold">
          Plans to Suit Your Business Budget
        </h1>
        <p className="text-t20 font-medium-slim mt-[0.44rem] max-w-[49.33rem]">
          Our fully organized plans deliver valuable content that showcases your
          services and skills, drives Lead, covers all features, and gives
          customers a clear idea to be able to choose your services.
        </p>
      </section>
      <section className="bg-baby_powder min-h-screen gap-[2rem] pb-[1.39rem] mt-[3.61rem] px-[3.58rem] pt-[5.28rem] grid place-content-between grid-cols-3">
        {pricing.map((plan) => (
          <PricingCard key={plan.plan} {...plan} />
        ))}
      </section>
      <section className="bg-baby_powder min-h-screen px-[3.58rem] pt-[2.56rem] pb-[5.78rem]">
        <h2 className="text-t32 font-medium text-black mb-[4.72rem]">
          Features Overview
        </h2>
        <div className="w-full max-w-full">
          <PlanTable />
        </div>
      </section>
    </AppLayout>
  );
}

export default Pricing;
