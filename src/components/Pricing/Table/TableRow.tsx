import Check from "@assets/icons/Check";
import Close from "@assets/icons/Close";
import React from "react";

interface TableRowProps {
  feature: string;
  type: string;
  plan: string[];
}

function TableRow({ feature, plan, type }: TableRowProps) {
  return (
    <tr className="py-[0.72rem] table w-full rounded-[0.33rem] odd:bg-white px-[1.83rem]">
      <td className="text-t20 font-medium-slim text-granite_gray">{feature}</td>
      <td className="w-[16.8rem] pl-24 text-center">
        {type === "plan" ? (
          <span className="text-t20 font-medium-slim text-black">
            {plan[0] !== "" ? (
              plan[0]
            ) : (
              <span className="block w-fit mx-auto">
                <Close />
              </span>
            )}
          </span>
        ) : plan.includes("Basic") ? (
          <span className="block w-fit mx-auto">
            <Check />
          </span>
        ) : (
          <span className="block w-fit mx-auto">
            <Close />
          </span>
        )}
      </td>
      <td className="w-[16.8rem] text-center">
        {type === "plan" ? (
          <span className="text-t20 font-medium-slim text-black">
            {plan[1]}
          </span>
        ) : plan.includes("Standard") ? (
          <span className="block w-fit mx-auto">
            <Check />
          </span>
        ) : (
          <span className="block w-fit mx-auto">
            <Close />
          </span>
        )}
      </td>
      <td className="w-[16.8rem] text-center">
        {type === "plan" ? (
          <span className="text-t20 font-medium-slim text-black">
            {plan[2]}
          </span>
        ) : plan.includes("Premium") ? (
          <span className="block w-fit mx-auto">
            <Check />
          </span>
        ) : (
          <span className="block w-fit mx-auto">
            <Close />
          </span>
        )}
      </td>
    </tr>
  );
}

export default TableRow;
