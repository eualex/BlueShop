import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";

import { getEletronics } from "../../../store/ducks/eletronics";
import { getSneakers } from "../../../store/ducks/sneakers";
import { RootState } from "../../../store/ducks";

import BigProduct from "../BigProduct";
import HeaderMain from "./HeaderMain";
import Loader from "../../../components/Loader";

import { useOpen } from "../../../contexts/burguerMenu";

import * as Styles from "./styles";

const Main: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  const { sneakersData, sneakersError, sneakersLoading } = useSelector(
    (state: RootState) => state.sneakers
  );
  const { eletronicsData, eletronicsError, eletronicsLoading } = useSelector(
    (state: RootState) => state.eletronics
  );

  const { open } = useOpen();

  const load = useCallback(() => {
    dispatch(getSneakers());
    dispatch(getEletronics());
  }, [dispatch]);

  useEffect(() => {
    Aos.init({ duration: 1800 });
    load();
  }, [load]);

  return (
    <Styles.Container open={open}>
      <HeaderMain />

      {sneakersLoading && eletronicsLoading ? (
        <Styles.ContainerLoader>
          <Loader width={100} height={100} type="ThreeDots" />
        </Styles.ContainerLoader>
      ) : sneakersData.length !== 0 &&
        !sneakersError &&
        eletronicsData.length !== 0 &&
        !eletronicsError ? (
        <Styles.ContainerMain>
          <hr />
          <h1>New Products</h1>
          
          <div className="container-product">
            <BigProduct
              image={eletronicsData[2].images[0].url}
              title={eletronicsData[2].name}
              price={eletronicsData[2].price}
              description={eletronicsData[2].description}
            />
          </div>

          <Styles.ContainerNike>
            <hr />
            <h1>Nike Session</h1>

            <div className="container-product">
              <BigProduct
                image={sneakersData[1].images[0].url}
                title={sneakersData[1].name}
                price={sneakersData[1].price}
                description={sneakersData[1].description}
                reverse="row-reverse"
              />
            </div>

            <hr />

            <div className="container-product">
              <BigProduct
                image={sneakersData[2].images[0].url}
                title={sneakersData[2].name}
                price={sneakersData[2].price}
                description={sneakersData[1].description}
              />
            </div>
          </Styles.ContainerNike>
        </Styles.ContainerMain>
      ) : (
        " "
      )}
    </Styles.Container>
  );
});

export default Main;
