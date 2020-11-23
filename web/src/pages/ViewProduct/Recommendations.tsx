import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { EletronicsProps, SneakersProps } from "../../utils/product";
import { RootState } from "../../store/ducks";
import { useCategory } from "../../contexts/category";
import { useSearchProduct } from "../../contexts/product";

import * as Styles from "./styles";

import Product from "../../components/Product";

interface PropsRecommendations {
  sneakersProduct?: SneakersProps;
  eletronicsProduct?: EletronicsProps;
}

const Recommendations: React.FC<PropsRecommendations> = ({
  eletronicsProduct,
  sneakersProduct,
}) => {
  const history = useHistory();
  const { eletronicsData } = useSelector(
    (state: RootState) => state.eletronics
  );
  const { sneakersData } = useSelector((state: RootState) => state.sneakers);

  const { category } = useCategory();
  const { searchProduct, setSearchProduct } = useSearchProduct();

  const handleProduct = (id: string) => {
    setSearchProduct({ id, category: category.name });
    history.push("product");
  };

  return (
    <Styles.Recommendations>
      <h1>Other Products</h1>

      <Styles.ContainerProducts>
        {(searchProduct.category === "sneakers" &&
          sneakersData
            ?.filter((s) => s.id !== sneakersProduct?.id)
            .map((s, index) => (
              <Product
                key={index}
                img={s.images[0].url}
                description={""}
                price={s.price}
                title={s.name}
                onClick={() => handleProduct(s.id)}
              />
            ))) ||
          (searchProduct.category === "eletronics" &&
            eletronicsData
              ?.filter((e) => e.id !== eletronicsProduct?.id)
              .map((e, index) => (
                <Product
                  key={index}
                  img={e.images[0].url}
                  description={""}
                  price={e.price}
                  title={e.name}
                  onClick={() => handleProduct(e.id)}
                />
              )))}
      </Styles.ContainerProducts>
    </Styles.Recommendations>
  );
};

export default Recommendations;
