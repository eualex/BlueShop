import React, { useCallback, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getEletronics } from "../store/ducks/eletronics";
import { getSneakers } from "../store/ducks/sneakers";

import Header from "../components/Header";
import Home from "../pages/Landing";
import Login from "../pages/User";
import ViewProduct from "../pages/ViewProduct";
import Main from "../pages/Main";
import RegisterProduct from "../pages/RegisterProduct";
import ChooseCategory from "../pages/Category";
import ErrorsPage from "../components/NotFound";
import EditProduct from "../pages/EditProduct";

import PrivateRoute from "./PrivateRoute";

import { useCategory } from "../contexts/category";
import { useLogin } from "../contexts/login";
import { useSearchProduct } from "../contexts/product";

const Routes: React.FC = () => {
  const dispatch = useDispatch();

  const { category } = useCategory();
  const { loginToken } = useLogin();
  const { searchProduct } = useSearchProduct();

  const checkCategory = () => !!category.name;

  const checkSearch = () => !!searchProduct.category;

  const checkProductToEdit = () => !!searchProduct.id;

  const checkLogin = () => !!loginToken;

  const checkIsLogin = () => !loginToken;

  const load = useCallback(() => {
    dispatch(getEletronics());
    dispatch(getSneakers());
  }, [dispatch]);

  useEffect(() => load(), [load]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={ChooseCategory} />
          <PrivateRoute
            path="/login"
            Component={Login}
            verify={checkIsLogin}
            redirect="/"
          />
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
          <PrivateRoute
            path="/edit-product"
            Component={EditProduct}
            verify={checkProductToEdit}
            redirect="/category"
          />
          <Route component={ErrorsPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
