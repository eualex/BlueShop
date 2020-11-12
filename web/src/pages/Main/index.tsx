import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSneakers } from "../../store/ducks/sneakers";
import { RootState } from "../../store/ducks";

import Header from "../../components/Header";
import Product from "./Product";
import Aside from "./Aside";

import { useCategory } from '../../contexts/category';

import * as Styles from "./styles";

import ImgProductAdidas from "../../img/svgtenis/adidas.svg";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { category } = useCategory();

  const { sneakersData } = useSelector((state: RootState) => state.sneakers);

  // const filtredData = data.filter(product => {
  //   if(category.name === "eletronics") {
  //     switch(category.item) {
  //       case 'notebooks':
  //         return product.category === ''
  //     }
  //   }
  // })

  // const load = useCallback(() => {
  //   dispatch(loadProducts());
  // }, [dispatch]);

  // useEffect(() => load(), [load]);

  return (
    <Styles.Container>
      <Header />
      
      <Styles.ContainerInput>
        <Styles.Input type="text" name="search" placeholder="Search..." />
      </Styles.ContainerInput>
      
      <Styles.Wrapper>
        <Aside />

        <Styles.ContainerProducts>
          <Product 
            description="NMD City Sock 2" 
            img={ImgProductAdidas}
            price={100}
            title="Adidas"
          />
          <Product 
            description="NMD City Sock 2" 
            img={ImgProductAdidas}
            price={100}
            title="Adidas"
          />
          <Product 
            description="NMD City Sock 2" 
            img={ImgProductAdidas}
            price={100}
            title="Adidas"
          />
        </Styles.ContainerProducts>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default Main;
