import React from "react";
import WhatRef from "./WhatRef";
import ForwardRefs from "./ForwardRefs";
import UseRefH from "./UseRefH";

let topic = "ref";
export const ref_routes = [
   {
      topic,
      name: "what-is-ref",
      path: `${topic}/what-is-ref`,
      element: <WhatRef />,
      caseSensitive: true,
   },
   {
      topic,
      name: "forwardRef",
      path: `${topic}/forwardRef`,
      element: <ForwardRefs />,
      caseSensitive: true,
   },
   {
      topic,
      name: "useRef-hook",
      path: `${topic}/useRef`,
      element: <UseRefH />,
      caseSensitive: true,
   },
];
