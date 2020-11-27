import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { RootState } from "../../store/ducks";

import Product from "../../components/Product";
import Aside from "./Aside";

import { useCategory } from "../../contexts/category";
import { useSearchProduct } from "../../contexts/product";

import * as Styles from "./styles";
import NotFound from "./NotFound";
import { RootProduct } from "../../utils/product";

const Main: React.FC = () => {
  const history = useHistory();
  const { category } = useCategory();
  const { setSearchProduct } = useSearchProduct();

  const { sneakers, eletronics } = useSelector((state: RootState) => state);
  const [notFound, setNotFound] = useState(false);
  const [search, setSearch] = useState("");

  const handleProduct = useCallback(
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
          onClick={() => handleProduct(d.id)}
          key={d.id}
          price={d.price}
          img={d.images[0].url}
          title={d.name}
          description={""}
        />
      )),
    [handleProduct]
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
          return checkDataForRender(data);

        case "sneakers":
          return checkDataForRender(data);
      }
    },
    [checkDataForRender, category]
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
        <Aside />

        <Styles.ContainerProducts>
          {category.name === "eletronics" &&
            renderProducs(handleFilterProduct(eletronics.eletronicsData))}

          {category.name === "sneakers" &&
            renderProducs(handleFilterProduct(sneakers.sneakersData))}
        </Styles.ContainerProducts>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default React.memo(Main);
