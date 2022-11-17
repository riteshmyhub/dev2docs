import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import ReduxIntroduction from "./ReduxIntroduction";
import Architecture from "./Architecture";
import Principles from "./Principles";
import ReduxSetUp from "./ReduxSetUp";

let topic = "redux";
export const redux_routes = [
   {
      topic,
      name: "introduction",
      path: `${topic}/introduction`,
      element: <ReduxIntroduction />,
      caseSensitive: true,
   },
   {
      topic,
      name: "architecture",
      path: `${topic}/architecture`,
      element: <Architecture />,
      caseSensitive: true,
   },
   {
      topic,
      name: "principles",
      path: `${topic}/principles`,
      element: <Principles />,
      caseSensitive: true,
   },
   {
      topic,
      name: "redux-set-up",
      path: `${topic}/redux-set-up`,
      element: <ReduxSetUp />,
      caseSensitive: true,
   },
];
