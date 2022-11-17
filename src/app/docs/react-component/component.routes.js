import React from "react";
import Component from "./Component";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";
import PureComponentReact from "./PureComponentReact";
import ControlledComponent from "./ControlledComponent";
import UncontrolledComponent from "./UncontrolledComponent";
import Hoc from "./Hoc";

let topic = "component";

export const componentsRoutes = [
   {
      topic,
      name: "what is component",
      path: `${topic}/what-is-component`,
      caseSensitive: true,
      element: <Component />,
   },
   {
      topic,
      name: "function component",
      path: `${topic}/function-component`,
      caseSensitive: true,
      element: <FunctionalComponent />,
   },
   {
      topic,
      name: "class component",
      path: `${topic}/class-component`,
      caseSensitive: true,
      element: <ClassComponent />,
   },
   {
      topic,
      name: "pure component",
      path: `${topic}/pure-component`,
      caseSensitive: true,
      element: <PureComponentReact />,
   },
   {
      topic,
      name: "controlled component",
      path: `${topic}/controlled-component`,
      caseSensitive: true,
      element: <ControlledComponent />,
   },
   {
      topic,
      name: "uncontrolled component",
      path: `${topic}/uncontrolled-component`,
      caseSensitive: true,
      element: <UncontrolledComponent />,
   },
   {
      topic,
      name: "high order component",
      path: `${topic}/high-order-component`,
      caseSensitive: true,
      element: <Hoc />,
   },
];
