import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import WhatIsState from "./WhatIsState";
import StateInFunction from "./StateInFunction";
import StateInClass from "./StateInClass";
import PreviousState from "./PreviousState";
import PreviousObject from "./PreviousObject";

let topic = "state";
export const state_routes = [
   {
      topic,
      name: "what-is-state",
      path: `${topic}/what-is-state`,
      element: <WhatIsState />,
      caseSensitive: true,
   },
   {
      topic,
      name: "state-in-function-component",
      path: `${topic}/state-in-function-component`,
      element: <StateInFunction />,
      caseSensitive: true,
   },
   {
      topic,
      name: "state-in-class-component",
      path: `${topic}/state-in-class-component`,
      element: <StateInClass />,
      caseSensitive: true,
   },
   {
      topic,
      name: "previous-state",
      path: `${topic}/previous-state`,
      element: <PreviousState />,
      caseSensitive: true,
   },
   {
      topic,
      name: "previous-state-with-object",
      path: `${topic}/previous-state-with-object`,
      element: <PreviousObject />,
      caseSensitive: true,
   },
];
