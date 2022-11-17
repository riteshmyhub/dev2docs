import React from "react";
import WhatPortals from "./WhatPortals";

let topic = "portals";
export const portals_routes = [
   {
      topic,
      name: "what-is-portals",
      path: `${topic}/what-is-portals`,
      element: <WhatPortals />,
      caseSensitive: true,
   },
];
