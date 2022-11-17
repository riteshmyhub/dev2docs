import React from "react";
import FormValidation from "./FormValidation";
import BasicForm from "./BasicForm";

let topic = "form-handling";

export const formRoutes = [
   {
      topic,
      name: "what is form handling",
      path: `${topic}/what-is-form-handling`,
      caseSensitive: true,
      element: (
         <>
            <h1>what is form handling</h1>
            <ul data-ul="Handling forms">
               <li>Handling forms is a multipart process</li>
            </ul>
         </>
      ),
   },
   {
      topic,
      name: "BasicForm",
      path: `${topic}/basic-form`,
      caseSensitive: true,
      element: <BasicForm />,
   },
   {
      topic,
      name: "basic form validation",
      path: `${topic}/basic-form-validation`,
      caseSensitive: true,
      element: <FormValidation />,
   },
];
