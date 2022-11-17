import React from "react";
import FunctionEvents from "./FunctionEvents";
import ClassEvents from "./ClassEvents";

let topic = "events-handling";

export const events_handling_routes = [
   {
      topic,
      name: "events-in-function-component",
      path: `${topic}/function-component`,
      caseSensitive: true,
      element: <FunctionEvents />,
   },
   {
      topic,
      name: "events-in-class-component",
      path: `${topic}/class-component`,
      caseSensitive: true,
      element: <ClassEvents />,
   },
];
