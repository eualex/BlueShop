import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { PropsSneakers } from "../../store/ducks/sneakers";
import { PropsEletronics } from "../../store/ducks/eletronics";
import { RootState } from "../../store/ducks";

import Product from "../../components/Product";
import Aside from "./Aside";

import { useCategory } from "../../contexts/category";
import { useSearchProduct } from "../../contexts/product";

import * as Styles from "./styles";
import NotFound from "./NotFound";

const Main: React.FC = () => {
  const history = useHistory()
  const { category } = useCategory();
  const { setSearchProduct } = useSearchProduct();

  const [eletronicsFiltered, setEletronicsFiltered] = useState<
    PropsEletronics[]
  >([]);
  const [sneakersFiltered, setSneakersFiltered] = useState<PropsSneakers[]>([]);

  const { sneakersData } = useSelector((state: RootState) => state.sneakers);
  const { eletronicsData } = useSelector(
    (state: RootState) => state.eletronics
  );

  const handleFilter = useCallback(
    (search?: string) => {
      switch (category.name) {
        case "eletronics":
          setSneakersFiltered([]);
          if (category.item === "all") {
            !!search
              ? setEletronicsFiltered(
                  eletronicsData.filter(
                    (e) => e.name.toLocaleLowerCase().indexOf(search) !== -1
                  )
                )
              : setEletronicsFiltered(eletronicsData);
          } else {
            !!search
              ? setEletronicsFiltered(
                  eletronicsData.filter(
                    (e) =>
                      e.item === category.item &&
                      e.name.toLocaleLowerCase().indexOf(search) !== -1
                  )
                )
              : setEletronicsFiltered(
                  eletronicsData.filter((e) => e.item === category.item)
                );
          }
          break;
        case "sneakers":
          setEletronicsFiltered([])
          if (category.item === "all") {
            !!search
              ? setSneakersFiltered(
                  sneakersData.filter(
                    (e) => e.name.toLocaleLowerCase().indexOf(search) !== -1
                  )
                )
              : setSneakersFiltered(sneakersData);
          } else {
            !!search
              ? setSneakersFiltered(
                  sneakersData.filter(
                    (e) =>
                      (e.genre === category.item || e.genre === "all") &&
                      e.name.toLocaleLowerCase().indexOf(search) !== -1
                  )
                )
              : setSneakersFiltered(
                  sneakersData.filter(
                    (e) => e.genre === category.item || e.genre === "all"
                  )
                );
          }
          break;
      }
    },
    [category, eletronicsData, sneakersData]
  );

  const handleProduct = (id: string) => {
    setSearchProduct({ id, category: category.name });
    history.push("product");
  }

  useEffect(() => {
    handleFilter();
    return () => {};
  }, [handleFilter]);

  return (
    <Styles.Container>
      <Styles.ContainerInput>
        <Styles.Input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={(e) => handleFilter(e.target.value.toLocaleLowerCase())}
        />
      </Styles.ContainerInput>

      {(eletronicsFiltered.length !== 0 || sneakersFiltered.length !== 0) && (
        <>

          <Styles.Wrapper>
            <Aside />

            <Styles.ContainerProducts>
              {category.name === "eletronics" &&
                eletronicsFiltered.length !== 0 &&
                eletronicsFiltered.map((e) => (
                  <Product
                    onClick={() => handleProduct(e.id)}
                    key={e.id}
                    price={e.price}
                    img={e.images[0].url}
                    title={e.name}
                    description={""}
                  />
                ))}

              {category.name === "sneakers" &&
                sneakersFiltered.length !== 0 &&
                sneakersFiltered.map((s) => (
                  <Product
                    onClick={() => handleProduct(s.id)}
                    key={s.id}
                    price={s.price}
                    img={s.images[0].url}
                    title={s.name}
                    description={""}
                  />
                ))}
            </Styles.ContainerProducts>
          </Styles.Wrapper>
        </>
      )}

      {eletronicsFiltered.length === 0 && category.name === "eletronics" && (
        <NotFound className="products-not-found"/>
      )}
      {sneakersFiltered.length === 0 && category.name === "sneakers" && (
        <NotFound className="products-not-found"/>
      )}
    </Styles.Container>
  );
};

export default React.memo(Main);
