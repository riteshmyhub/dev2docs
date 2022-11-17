import React from "react";
import WhatHooks from "./WhatHooks";
import UseStateH from "./UseStateH";
import UseEffectH from "./UseEffectH";
import UseMemoH from "./UseMemoH";
import UseReducerH from "./UseReducerH";
import CustomHooks from "./CustomHooks";
import { Alert, AlertTitle } from "@mui/material";

let topic = "hooks";
export const hooks_routes = [
   {
      topic,
      name: "what is hooks",
      path: `${topic}/what-is-hooks`,
      caseSensitive: true,
      element: <WhatHooks />,
   },
   {
      topic,
      name: "useState",
      path: `${topic}/useState`,
      caseSensitive: true,
      element: <UseStateH />,
   },
   {
      topic,
      name: "useEffect",
      path: `${topic}/useEffect`,
      caseSensitive: true,
      element: <UseEffectH />,
   },
   {
      topic,
      name: "useMemo",
      path: `${topic}/useMemo`,
      caseSensitive: true,
      element: <UseMemoH />,
   },
   {
      topic,
      name: "useReducer",
      path: `${topic}/useReducer`,
      caseSensitive: true,
      element: <UseReducerH />,
   },
   {
      topic,
      name: "custom-hooks",
      path: `${topic}/custom-hooks`,
      caseSensitive: true,
      element: <CustomHooks />,
   },
];
