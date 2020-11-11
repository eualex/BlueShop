import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";

import { loadProducts } from "../../../store/ducks/ProductsData";
import { RootState } from "../../../store/ducks";

import BigProduct from "../BigProduct";
import HeaderMain from "./HeaderMain";
import Loader from "../../../components/Loader";

import { useOpen } from "../../../contexts/burguerMenu";

import * as Styles from "./styles";

const Main: React.FC = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state: RootState) => state.products);
  const { open } = useOpen();

  const load = useCallback(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  useEffect(() => {
    Aos.init({ duration: 1800 });
    load();
  }, [load]);

  return (
    <Styles.Container open={open}>
      <HeaderMain />

      {loading ? (
        <Styles.ContainerLoader>
          <Loader width={100} height={100} type="ThreeDots"/>
        </Styles.ContainerLoader>
      ) : data.length !== 0 && !error ? (
        <Styles.ContainerMain>
          <hr />
          <h1>New Products</h1>

          <div className="container-product">
            <BigProduct
              image={data[0].images[0].url}
              title={data[0].name}
              price={data[0].price}
              description={data[0].description}
            />
          </div>

          <Styles.ContainerNike>
            <hr />
            <h1>Nike Session</h1>

            <div className="container-product">
              <BigProduct
                image={data[1].images[0].url}
                title={data[1].name}
                price={data[1].price}
                description={data[1].description}
                reverse="row-reverse"
              />
            </div>

            <hr />

            <div className="container-product">
              <BigProduct
                image={data[2].images[0].url}
                title={data[2].name}
                price={data[2].price}
                description={data[1].description}
              />
            </div>
          </Styles.ContainerNike>
        </Styles.ContainerMain>
      ) : console.log("Fazer pagina de not found :)")}
    </Styles.Container>
  );
};

export default Main;
