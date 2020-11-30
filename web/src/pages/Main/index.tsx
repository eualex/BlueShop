import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { RootState } from "../../store/ducks";
import { RootProduct } from "../../utils/product";

import { useCategory } from "../../contexts/category";
import { useSearchProduct } from "../../contexts/product";

import * as Styles from "./styles";
import Loader from "../../components/Loader";
import Product from "../../components/Product";
import NotFound from "../../components/NotFound";
import Aside from "./Aside";

const Main: React.FC = () => {
  const history = useHistory();
  const { category } = useCategory();
  const { setSearchProduct } = useSearchProduct();

  const { sneakers, eletronics } = useSelector((state: RootState) => state);
  const [search, setSearch] = useState("");

  const handleViewProduct = useCallback(
    (id: string) => {
      setSearchProduct({ id, category: category.name });
      history.push("product");
    },
    [category, history, setSearchProduct]
  );

  const renderProducs = useCallback(
    (data?: RootProduct[]) =>
      data?.map((d) => (
        <Product
          onClick={() => handleViewProduct(d.id)}
          key={d.id}
          price={d.price}
          img={d.images[0].url}
          title={d.name}
          description={""}
        />
      )),
    [handleViewProduct]
  );

  const checkDataForRender = useCallback(
    (data: RootProduct[]) => {
      const dataFilter = data.filter(
        (d) =>
          d.Eitem === category.item ||
          d.Sgenre === category.item ||
          d.Sgenre === "all"
      );

      if (category.item === "all" && !search) return data;

      if (search) {
        const dataFilteredBySearch = data.filter(
          (df) => df.name.toLocaleLowerCase().indexOf(search) !== -1
        );
        return dataFilteredBySearch?.length !== 0 ? dataFilteredBySearch : [];
      }
      return dataFilter?.length !== 0 ? dataFilter : [];
    },
    [category.item, search]
  );

  const handleFilterProduct = useCallback(
    (data: RootProduct[]) => {
      switch (category.name) {
        case "eletronics":
          return checkDataForRender(data).length !== 0 ? (
            renderProducs(checkDataForRender(data))
          ) : !eletronics.eletronicsLoading || !sneakers.sneakersLoading ? (
            <NotFound className="products-not-found" title="Products" />
          ) : (
            ""
          );
        case "sneakers":
          return checkDataForRender(data).length !== 0 ? (
            renderProducs(checkDataForRender(data))
          ) : !eletronics.eletronicsLoading || !sneakers.sneakersLoading ? (
            <NotFound className="products-not-found" title="Products" />
          ) : (
            ""
          );
      }
    },
    [
      checkDataForRender,
      category,
      renderProducs,
      eletronics.eletronicsLoading,
      sneakers.sneakersLoading,
    ]
  );

  return (
    <Styles.Container>
      <Styles.ContainerInput>
        <Styles.Input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </Styles.ContainerInput>
      <Styles.Wrapper>
        {sneakers.sneakersLoading || eletronics.eletronicsLoading ? (
          <Styles.ContainerLoader>
            <Loader height={100} width={100} type="ThreeDots" />
          </Styles.ContainerLoader>
        ) : (
          <>
            <Aside />

            <Styles.ContainerProducts>
              {category.name === "eletronics" &&
                handleFilterProduct(eletronics.eletronicsData)}

              {category.name === "sneakers" &&
                handleFilterProduct(sneakers.sneakersData)}
            </Styles.ContainerProducts>
          </>
        )}
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default React.memo(Main);
