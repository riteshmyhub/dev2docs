import React from "react";
import UseContextH from "./UseContextH";
import PropsDrilling from "./PropsDrilling";
import WhatContext from "./WhatContext";
import HowToUseContextApi from "./HowToUseContextApi";

let topic = "context-api";

export const contextApiRoutes = [
   {
      topic,
      name: "props-drilling",
      path: `${topic}/props-drilling`,
      caseSensitive: true,
      element: <PropsDrilling />,
   },
   {
      topic,
      name: "what-is-context-api",
      path: `${topic}/what-is-context-api`,
      caseSensitive: true,
      element: <WhatContext />,
   },
   {
      topic,
      name: "how to use context api",
      path: `${topic}/how-to-use-context-api`,
      caseSensitive: true,
      element: <HowToUseContextApi />,
   },
   {
      topic,
      name: "useContext hook",
      path: `${topic}/useContext-hook`,
      caseSensitive: true,
      element: <UseContextH />,
   },
];
