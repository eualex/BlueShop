import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PropsPublicRoute extends RouteProps {
  Component: React.FC;
  redirect: string;
  verify: () => boolean;
}

const PrivateRoute: React.FC<PropsPublicRoute> = ({ Component, verify, redirect, ...rest }) => {
  return (
    <Route { ...rest } render={props => (
      verify() ?
        <Component /> 
      :
        <Redirect to={redirect} />
    )}/>
  );
}

export default PrivateRoute;