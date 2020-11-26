import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { RootProduct } from "../../utils/product";
import { RootState } from "../../store/ducks";
import { useCategory } from "../../contexts/category";
import { useSearchProduct } from "../../contexts/product";

import Product from "../../components/Product";
import Aside from "./Aside";
import NotFound from "./NotFound";

import * as Styles from "./styles";

const Main: React.FC = () => {
  const history = useHistory();
  const { category } = useCategory();
  const { setSearchProduct } = useSearchProduct();

  const { sneakers, eletronics } = useSelector((state: RootState) => state);

  const handleProduct = useCallback(
    (id: string) => {
      setSearchProduct({ id, category: category.name });
      history.push("product");
    },
    [category, history, setSearchProduct]
  );

  const renderProducts = useCallback(
    (data: RootProduct[]) =>
      data.map((e) => (
        <Product
          onClick={() => handleProduct(e.id)}
          key={e.id}
          price={e.price}
          img={e.images[0].url}
          title={e.name}
          description={""}
        />
      )),
    [handleProduct]
  );

  const handleFilterProduct = useCallback(
    (data: RootProduct[], search?: string) => {
      if (category.item === "all") {
        return renderProducts(data);
      }

      if (search) {
        return renderProducts(
          data.filter(
            (d) =>
              ((d.Eitem === category.item && d.Eitem === "all") ||
                (d.Sgenre === category.item && d.Sgenre === "all")) &&
              d.name.toLowerCase().indexOf(search) !== -1
          )
        );
      }

      return renderProducts(
        data.filter(
          (d) =>
            (d.Eitem === category.item && d.Eitem === "all") ||
            (d.Sgenre === category.item && d.Sgenre === "all")
        )
      );
    },
    [category, renderProducts]
  );

  return (
    <Styles.Container>
      <Styles.ContainerInput>
        <Styles.Input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={(e) =>
            handleFilterProduct(
              eletronics.eletronicsData,
              e.target.value.toLocaleLowerCase()
            )
          }
        />
      </Styles.ContainerInput>

      <>
        <Styles.Wrapper>
          <Aside />

          <Styles.ContainerProducts>
            {category.name === "eletronics" &&
              handleFilterProduct(eletronics.eletronicsData)}
            {category.name === "sneakers" &&
              handleFilterProduct(sneakers.sneakersData)}
          </Styles.ContainerProducts>
        </Styles.Wrapper>
      </>
    </Styles.Container>
  );
};

export default React.memo(Main);
