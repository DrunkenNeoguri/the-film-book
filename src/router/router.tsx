import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Main from "../pages/main";
import Film from "../pages/film";
import Detail from "../pages/film/detail";
import Upload from "../pages/film/develop/upload";
import Edit from "../pages/film/develop/edit";

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
// 메인 페이지
const index = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Main,
});

// 필름 라우팅 (그룹화)
const film = createRoute({
  getParentRoute: () => rootRoute,
  path: "film",
});

// 필름 리스트 페이지
const filmIndex = createRoute({
  getParentRoute: () => film,
  path: "/",
  component: Film,
});

// 동적 라우팅은 아래와 같이 적용한다.
// loader를 이용하면 해당 컴포넌트에서 필요한 params를 전달하고 받아올 수 있다.
// 필름 상세 페이지
const detail = createRoute({
  getParentRoute: () => film,
  loader: ({ params }) => {},
  path: "$filmId",
  component: Detail,
});

// 한 도메인 안에 동일한 레이아웃이 필요하다면 이렇게 감싼다.
// develop = 사진을 현상하다
// 필름 현상 페이지 (업로드)
const develop = createRoute({
  getParentRoute: () => film,
  path: "develop",
  component: Upload,
});

// 필름 수정 페이지
const edit = createRoute({
  getParentRoute: () => film,
  path: "develop/$filmId",
  component: Edit,
});

//*MEMO: 모든 경로는 TypeScript에게 어떤 경로를 제공할지 알려주기 위해 getParentRoute를 가진다. (타입 안정성)

// 위에서 생성한 라우트들을 rootRoute에 추가하여 라우팅 트리를 만들도록 한다.
const routeTree = rootRoute.addChildren([
  index,
  film.addChildren([filmIndex, detail, develop, edit]),
]);

export const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});
