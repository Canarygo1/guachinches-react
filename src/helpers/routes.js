import React from "react";
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import BusinessApp from "../pages/businessApp";
import ContainerWithLeftNavBar from "../components/ContainerWithLeftNavBar";
import Main from "../pages/main";
import Menu from "../pages/Menu";
import Review from "../pages/review";
import AdminMain from "../pages/adminMain";
import Login from "../pages/login";
import GlobalMethods from "./globalMethod";
import DataPolicy from "../pages/dataPolicy";
import Terms from "../pages/Terms";


const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: BusinessApp },
  {
    path: "/data/dataPolicy/",
    key: "DATA",
    exact: true,
    component: () => <DataPolicy/>,
  },
  {
    path: "/data/terms/",
    key: "DATA",
    exact: true,
    component: () => <Terms/>,
  },
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
        path: "/app/",
        key: "APP_ROOT",
        exact: true,
        component: () => GlobalMethods.getSessionAdmin() ? GlobalMethods.getUserRole() === 'Admin'? <Redirect to={"/app/admin/main"}/>
          :<Login/> : GlobalMethods.getSessionEmployee()? <Redirect to={`/app/${GlobalMethods.getRestaurantId()}`}/> : <Login/>,
      },
      {
        path: "/app/:businessId",
        key: "APP_ROOT",
        exact: true,
        component: () => GlobalMethods.getSessionEmployee() || GlobalMethods.getSessionAdmin() ?<ContainerWithLeftNavBar isAdmin={false}><Main/></ContainerWithLeftNavBar>: <Redirect to={"/app"}/>,
      },
      {
        path: "/app/:businessId/menu",
        key: "APP_PAGE",
        exact: true,
        component: () => <ContainerWithLeftNavBar isAdmin={false}><Menu/></ContainerWithLeftNavBar>,
      },
      {
        path: "/app/:businessId/review",
        key: "APP_PAGE",
        exact: true,
        component: () => <ContainerWithLeftNavBar isAdmin={false}><Review/></ContainerWithLeftNavBar>,
      },
      {
        path: "/app/admin/main",
        key: "APP_PAGE",
        exact: true,
        component: () => <ContainerWithLeftNavBar isAdmin={true}><AdminMain/></ContainerWithLeftNavBar>,
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
