import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
import ImglifeCycleMethod from "../../../assets/images/lifeCycleMethod.png";
import WhatIsConstructor from "./WhatIsConstructor";
import RenderMethod from "./RenderMethod";
import DidMount from "./DidMount";
import DidUpdate from "./DidUpdate";
import ShouldUpdate from "./ShouldUpdate";
import WillUnmount from "./WillUnmount";

let topic = "life-cycle";

export const life_cycle_ruotes = [
   {
      topic,
      name: "what is jsx",
      path: `${topic}/what-is-life-cycle-method`,
      caseSensitive: true,
      element: (
         <>
            <h1>life cycle method</h1>
            <ul data-ul="what is life cycle method">
               <li>
                  life cycle method are component life statages inwhich component is <strong>mounting</strong> , <strong>updating</strong> , <strong>unmonting</strong>
               </li>
               <li>This life cycle stages are called to phases</li>
               <li>each component have own life cycle and three phases</li>
            </ul>
            <img src={ImglifeCycleMethod} className="img-fluid" alt="" />
         </>
      ),
   },
   {
      topic,
      name: "constructor",
      path: `${topic}/constructor`,
      caseSensitive: true,
      element: <WhatIsConstructor />,
   },
   {
      topic,
      name: "render-method",
      path: `${topic}/render-method`,
      caseSensitive: true,
      element: <RenderMethod />,
   },
   {
      topic,
      name: "component-did-mount",
      path: `${topic}/component-did-mount`,
      caseSensitive: true,
      element: <DidMount />,
   },
   {
      topic,
      name: "component-did-update",
      path: `${topic}/component-did-update`,
      caseSensitive: true,
      element: <DidUpdate />,
   },
   {
      topic,
      name: "should-component-update",
      path: `${topic}/should-component-update`,
      caseSensitive: true,
      element: <ShouldUpdate />,
   },
   {
      topic,
      name: "component-will-unmount",
      path: `${topic}/component-will-unmount`,
      caseSensitive: true,
      element: <WillUnmount />,
   },
];
