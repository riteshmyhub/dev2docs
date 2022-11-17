import React from "react";
import ArrayList from "./ArrayList";
import ArrayOfObjectsList from "./ArrayOfObjectsList";
import NestedArrayList from "./NestedArrayList";
import WhatIsListRendering from "./WhatIsListRendering";

let topic = "list-rendering";

export const list_rendering_routes = [
   {
      topic,
      name: "what-is-list-rendering",
      path: `${topic}/what-is-list-rendering`,
      caseSensitive: true,
      element: <WhatIsListRendering />,
   },
   {
      topic,
      name: "array-list",
      path: `${topic}/array-list`,
      caseSensitive: true,
      element: <ArrayList />,
   },
   {
      topic,
      name: "array-of-objects-list",
      path: `${topic}/array-of-objects-list`,
      caseSensitive: true,
      element: <ArrayOfObjectsList />,
   },
   {
      topic,
      name: "nested-array-list",
      path: `${topic}/nested-array-list`,
      caseSensitive: true,
      element: <NestedArrayList />,
   },
];
