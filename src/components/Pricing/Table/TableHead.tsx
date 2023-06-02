import { PrimaryButton } from "@components/common/Buttons";
import React from "react";

function TableHead() {
  const plans = ["Basic", "Standard", "Premium"];
  return (
    <thead>
      <tr className="pb-[1.67rem] table w-full px-[1.83rem]">
        <td className="align-bottom text-t24 font-medium-slim text-granite_gray">
          Features & Services
        </td>
        {plans.map((plan) => (
          <td key={plan} className="align-bottom pl-24 w-[16.8rem]">
            <h5 className="text-t22 text-black font-medium mb-[1.33rem]">
              {plan}
            </h5>
            <PrimaryButton
              style={{
                padding: "0.78rem 0",
              }}
              type="button"
              text="Get started"
            />
          </td>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
