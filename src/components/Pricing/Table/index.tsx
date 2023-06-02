import { features } from "@data/features";
import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

function PlanTable() {
  return (
    <table className="w-full border-separate">
      <TableHead />
      <tbody>
        {features.map((feature) => (
          <TableRow key={feature.feature} {...feature} />
        ))}
      </tbody>
    </table>
  );
}

export default PlanTable;
