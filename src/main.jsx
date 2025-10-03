import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import "./styles.css";
import reportWebVitals from "./reportWebVitals.js";

import App from "./App.jsx";

// 최상위 라우팅인데 Head같은 역할을 해주는 것 같지만 차후에 알아보도록 하자.
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

// code 기반 라우팅은 아래와 같이 createRoute를 통해 라우팅한다.
const index = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const upload = createRoute({
  getParentRoute: () => rootRoute,
  path: "/upload",
  component: () => <></>,
});

const film = createRoute({
  getParentRoute: () => rootRoute,
  path: "/film",
  component: () => <></>,
});

// 동적 라우팅은 아래와 같이 적용한다.
const filmsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$postId",
});

const filmList = createRoute({
  getParentRoute: () => rootRoute,
  path: "/film-list",
  component: () => <></>,
});

// 위에서 생성한 라우트들을 rootRoute에 추가하여 라우팅 트리를 만들도록 한다.
const routeTree = rootRoute.addChildren([index, upload, film, filmList]);

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
