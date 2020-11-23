import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getEletronics } from "../../store/ducks/eletronics";
import { getSneakers } from "../../store/ducks/sneakers";

import api from "../../services/api";
import { EletronicsProps, SneakersProps } from "../../utils/product";
import { useSearchProduct } from "../../contexts/product";

import * as Styles from "./styles";

import Header from "../../components/Header";
import Recommendations from "./Recommendations";
import PrimaryInfo from "./PrimaryInfo";
import Aside from "./Aside";

const ViewProduct: React.FC = () => {
  const dispatch = useDispatch();

  const { searchProduct } = useSearchProduct();

  const [eletronicProduct, setEletronicProduct] = useState<EletronicsProps>();
  const [sneakersProduct, setSneakersProduct] = useState<SneakersProps>();

  const load = useCallback(async () => {
    const category = searchProduct.category.split("");
    category.pop();

    try {
      const response = await api.get(
        `${category.join("")}/${searchProduct.id}`
      );
      switch (searchProduct.category) {
        case "eletronics":
          setEletronicProduct(response.data);
          dispatch(getEletronics());
          break;
        case "sneakers":
          setSneakersProduct(response.data);
          dispatch(getSneakers());
          break;
      }
    } catch {}

  }, [dispatch, searchProduct.category, searchProduct.id]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Styles.Container>
      <Header />

      <Styles.Wrapper>
        <Styles.Top>
          <PrimaryInfo
            eletronicsProduct={eletronicProduct}
            sneakersProduct={sneakersProduct}
          />
          <Aside
            sneakersProduct={sneakersProduct}
            eletronicsProduct={eletronicProduct}
          />
        </Styles.Top>
        <Recommendations
          eletronicsProduct={eletronicProduct}
          sneakersProduct={sneakersProduct}
        />
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default ViewProduct;
