import React from "react";
import StyleSheets from "./StyleSheets";
import InlineStyles from "./InlineStyles";
import CssModule from "./CssModule";
import StyledComponent from "./StyledComponent";

let topic = "styling";

export const styleRoutes = [
   {
      topic,
      name: "style-sheets",
      path: `${topic}/style-sheets`,
      caseSensitive: true,
      element: <StyleSheets />,
   },
   {
      topic,
      name: "inline-styles",
      path: `${topic}/inline-styles`,
      caseSensitive: true,
      element: <InlineStyles />,
   },
   {
      topic,
      name: "css-module",
      path: `${topic}/css-module`,
      caseSensitive: true,
      element: <CssModule />,
   },
   {
      topic,
      name: "styled-component",
      path: `${topic}/styled-component`,
      caseSensitive: true,
      element: <StyledComponent />,
   },
];

