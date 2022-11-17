import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import WhatIsProps from "./WhatIsProps";
import PropsInFunction from "./PropsInFunction";
import PropsInClass from "./PropsInClass";
import PreviousProps from "./PreviousProps";
import PropsComposition from "./PropsComposition";

let topic = "props";
export const props_routes = [
   {
      topic,
      name: "what-is-props",
      path: `${topic}/what-is-props`,
      element: <WhatIsProps />,
      caseSensitive: true,
   },
   {
      topic,
      name: "props-in-function-component",
      path: `${topic}/props-in-function-component`,
      element: <PropsInFunction />,
      caseSensitive: true,
   },
   {
      topic,
      name: "props-in-class-component",
      path: `${topic}/props-in-class-component`,
      element: <PropsInClass />,
      caseSensitive: true,
   },
   {
      topic,
      name: "previous-props",
      path: `${topic}/previous-props`,
      element: <PreviousProps />,
      caseSensitive: true,
   },
   {
      topic,
      name: "props-composition",
      path: `${topic}/props-composition`,
      element: <PropsComposition />,
      caseSensitive: true,
   },
];
