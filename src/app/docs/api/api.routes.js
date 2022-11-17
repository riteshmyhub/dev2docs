import React from "react";
import WhatApi from "./WhatApi";
import HttpCurd from "./HttpCurd";
import CurdCode from "./CurdCode/CurdCode";

const topic = "fetch-api";

export const fetch_api_Routes = [
   {
      topic,
      name: "what-is-api",
      caseSensitive: true,
      path: `${topic}/what-is-api`,
      element: <WhatApi />,
   },
   {
      topic,
      name: "http-curd",
      caseSensitive: true,
      path: `${topic}/http-curd`,
      element: <HttpCurd />,
   },
   {
      topic,
      name: "curd-code",
      caseSensitive: true,
      path: `${topic}/curd-code`,
      element: <CurdCode />,
   },
];
