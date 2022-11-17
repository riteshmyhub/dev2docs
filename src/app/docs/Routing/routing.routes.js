import React from "react";
import WhatRouting from "./WhatRouting";
import BasicRouting from "./BasicRouting";
import DynamicRouting from "./DynamicRouting";
import RoutingHooks from "./RoutingHooks";

let topic = "routing-v5";
export const routing_routes = [
   {
      topic,
      name: "what-is-routing",
      path: `${topic}/what-is-routing`,
      element: <WhatRouting />,
      caseSensitive: true,
   },
   {
      topic,
      name: "basic-routing",
      path: `${topic}/basic-routing`,
      element: <BasicRouting />,
      caseSensitive: true,
   },
   {
      topic,
      name: "dynamic-routing",
      path: `${topic}/dynamic-routing`,
      element: <DynamicRouting />,
      caseSensitive: true,
   },
   {
      topic,
      name: "routing-hooks",
      path: `${topic}/dynamic-hooks`,
      element: <RoutingHooks />,
      caseSensitive: true,
   },
];
