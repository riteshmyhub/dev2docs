import WhatIsJsx from "./WhatIsJsx";
import JsxRules from "./JsxRules";
import Fragment from "./Fragment";

let topic = "jsx";

export const jsxRoutes = [
   {
      topic,
      name: "what is jsx",
      path: `${topic}/what-is-jsx`,
      caseSensitive: true,
      element: <WhatIsJsx />,
   },
   {
      topic,
      name: "rules-of-jsx",
      path: `${topic}/rules-of-jsx`,
      caseSensitive: true,
      element: <JsxRules />,
   },
   {
      topic,
      name: "fragment",
      path: `${topic}/fragment`,
      caseSensitive: true,
      element: <Fragment />,
   },
];
