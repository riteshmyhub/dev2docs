import { introRoutes } from "./Intro/Intro.routes";
import { jsxRoutes } from "./Jsx/Jsx.routes";
import { styleRoutes } from "./styling/styling.routes";
import { componentsRoutes } from "./react-component/component.routes";
import { conditionalRenderingRoutes } from "./conditional-rendering/conditional_rendering.routes";
import { fetch_api_Routes } from "./api/api.routes";
import { contextApiRoutes } from "./context-api/contextapi.routes";
import { formRoutes } from "./form-handling/form.routes";
import { events_handling_routes } from "./HandlingEvents/events.routes";
import { hooks_routes } from "./hooks/hooks.routes";
import { life_cycle_ruotes } from "./life-cycle/life_cycle.routes";
import { list_rendering_routes } from "./list-rendering/list_rendering.routes";
import { portals_routes } from "./portals/portals.routes";
import { props_routes } from "./props/props.routes";
import { redux_routes } from "./redux/redux.routes";
import { ref_routes } from "./Ref/ref.routes";
import { routing_routes } from "./Routing/routing.routes";
import { state_routes } from "./state/state.routes";

const topics = [
   {
      name: "Introduction",
      path: "introduction/intro",
   },
   {
      name: "jsx",
      path: "jsx/what-is-jsx",
   },
   {
      name: "styling",
      path: "styling/style-sheets",
   },
   {
      name: "component",
      path: "component/what-is-component",
   },
   {
      name: "state",
      path: "state/what-is-state",
   },
   {
      name: "props",
      path: "props/what-is-props",
   },
   {
      name: "ref",
      path: "ref/what-is-ref",
   },
   {
      name: "conditional-rendering",
      path: "conditional-rendering/if-else",
   },
   {
      name: "events-handling",
      path: "events-handling/function-component",
   },
   {
      name: "list-rendering",
      path: "list-rendering/what-is-list-rendering",
   },
   {
      name: "life-cycle",
      path: "life-cycle/what-is-life-cycle-method",
   },
   {
      name: "form-handling",
      path: "form-handling/what-is-form-handling",
   },
   {
      name: "hooks",
      path: "hooks/what-is-hooks",
   },
   {
      name: "context-api",
      path: "context-api/props-drilling",
   },
   {
      name: "routing-v5",
      path: "routing-v5/what-is-routing",
      library: true,
   },
   {
      name: "fetch-api",
      path: "fetch-api/what-is-api",
   },
   {
      name: "portals",
      path: "portals/what-is-portals",
   },
   {
      name: "redux",
      path: "redux/introduction",
      library: true,
   },
];

const docsRoutes = [
   ...introRoutes, //
   ...jsxRoutes,
   ...styleRoutes,
   ...componentsRoutes,
   ...conditionalRenderingRoutes,
   ...fetch_api_Routes,
   ...contextApiRoutes,
   ...formRoutes,
   ...events_handling_routes,
   ...hooks_routes,
   ...life_cycle_ruotes,
   ...list_rendering_routes,
   ...portals_routes,
   ...props_routes,
   ...redux_routes,
   ...ref_routes,
   ...routing_routes,
   ...state_routes,
];

export { docsRoutes, topics };
