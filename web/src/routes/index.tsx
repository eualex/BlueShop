import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Landing";
import Login from "../pages/User";
import ViewProduct from "../pages/ViewProduct";
import Main from "../pages/Main";
import RegisterProduct from "../pages/RegisterProduct";
import ChooseCategory from "../pages/Category";
import ErrorsPage from "../components/404";

import PrivateRoute from "./PrivateRoute";

import { useCategory } from "../contexts/category";
import { useLogin } from "../contexts/login";
import { useSearchProduct } from "../contexts/product";

const Routes: React.FC = () => {
  const { category } = useCategory();
  const { loginToken } = useLogin();
  const { searchProduct } = useSearchProduct();

  const checkCategory = () => {
    return !!category.name;
  };

  const checkSearch = () => {
    return !!searchProduct.category;
  };

  const checkLogin = () => {
    console.log(!!loginToken);
   
    return !!loginToken;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={ChooseCategory} />
        <Route path="/login" component={Login} />
        <PrivateRoute
          path="/register-product"
          Component={RegisterProduct}
          verify={checkLogin}
          redirect="/login"
        />
        <PrivateRoute
          path="/main"
          Component={Main}
          verify={checkCategory}
          redirect="/category"
        />
        <PrivateRoute
          path="/product"
          Component={ViewProduct}
          verify={checkSearch}
          redirect="/category"
        />
        <Route component={ErrorsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
