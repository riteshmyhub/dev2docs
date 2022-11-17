import Booting from "./Booting";
import Introduction from "./Introduction";
import Setup from "./Setup";

let topic = "introduction";

export const introRoutes = [
   {
      topic: topic,
      name: "introduction",
      path: `${topic}/intro`,
      caseSensitive: true,
      element: <Introduction />,
   },
   {
      topic: topic,
      name: "set-up",
      path: `${topic}/set-up`,
      caseSensitive: true,
      element: <Setup />,
   },
   {
      topic: topic,
      name: "booting",
      path: `${topic}/booting`,
      caseSensitive: true,
      element: <Booting />,
   },
];
