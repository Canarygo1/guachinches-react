import React from "react";
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import BusinessApp from "../pages/businessApp";
import ContainerWithLeftNavBar from "../components/ContainerWithLeftNavBar";
import Main from "../pages/main";


const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: BusinessApp },
  {
    path: "/app",
    key: "APP",
    component: props => {
      if (0===1) {
        return <Redirect to={"/"}/>;
      }
      return <RenderRoutes {...props} />;
    },
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        exact: true,
        component: () => <ContainerWithLeftNavBar><Main/></ContainerWithLeftNavBar>,
      },
      {
        path: "/app/page",
        key: "APP_PAGE",
        exact: true,
        component: () => <h1>App Page</h1>,
      },
    ],
  },
];

export default ROUTES;



function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}
export function RenderRoutes({ routes }) {
  return (
    <BrowserRouter>
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
      </BrowserRouter>
      );
}
