import Check2 from "@assets/icons/Check2";
import { PrimaryButton } from "@components/common/Buttons";
import { formatter } from "@utils/formatter";
import React from "react";
import { PlanProps } from "types/pricing";

function PricingCard({ plan, amount, features }: PlanProps) {
  return (
    <div className="bg-white min-h-[73.22rem] w-full rounded-[0.44rem] px-[1.11rem] pt-[4.11rem] max-w-[23rem]">
      <h5 className="text-t22 text-black font-medium mb-[0.89rem]">{plan}</h5>
      <h3 className="text-t48 text-black font-Recoleta font-semibold mb-[1.06rem]">
        {amount !== 0 ? (
          <span className="flex items-baseline relative font-Recoleta">
            <span className="text-t16 self-start font-Recoleta pt-3">NGN</span>
            {formatter.format(amount).replace("NGN", "").trim()}
            <span className="text-t20 inline-block ml-[0.44rem] font-Recoleta">
              /year
            </span>
          </span>
        ) : (
          "Free"
        )}
      </h3>
      <PrimaryButton type="button" text="Get started" />
      <ul className="mt-[2.67rem] space-y-[1.33rem]">
        {features.map((feature) => (
          <li key={feature} className="flex items-center space-x-[1.33rem]">
            <Check2 />
            <span className="block text-t20 text-granite_gray">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PricingCard;
