import React from "react";
import IfElse from "./IfElse";
import ElementVariables from "./ElementVariables";
import TernaryOperator from "./TernaryOperator";
import ShortCircuitOperator from "./ShortCircuitOperator";

let topic = "conditional-rendering";

export const conditionalRenderingRoutes = [
   {
      topic,
      name: "if-else",
      path: `${topic}/if-else`,
      caseSensitive: true,
      element: <IfElse />,
   },
   {
      topic,
      name: "element-variables",
      path: `${topic}/element-variables`,
      caseSensitive: true,
      element: <ElementVariables />,
   },
   {
      topic,
      name: "ternary-operator",
      path: `${topic}/ternary-operator`,
      caseSensitive: true,
      element: <TernaryOperator />,
   },
   {
      topic,
      name: "event-handling",
      path: `${topic}/event-handling`,
      caseSensitive: true,
      element: <ShortCircuitOperator />,
   },
];
