import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import api from "../../services/api";
import { EletronicsProps, SneakersProps } from "../../utils/product";
import { useSearchProduct } from "../../contexts/product";
import { useTheme } from "../../contexts/theme";

import Header from "../../components/Header";
import * as Styles from "./styles";
import sneakers from "../../store/ducks/sneakers";
import Button from "../../components/Button";

const Product: React.FC = () => {
  const { searchProduct } = useSearchProduct();
  const { theme } = useTheme();
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
          break;
        case "sneakers":
          console.log(response.data);
          setSneakersProduct(response.data);
      }
    } catch {}
  }, [searchProduct, setSneakersProduct]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Styles.Container>
      <Header />

      <Styles.Wrapper>
        <Styles.Top>
          <Styles.ContainerImages>
            <Styles.Image src={sneakersProduct?.images[0].url} alt="Product" />
            <div className="images">
              <Styles.SmallImage />
              <Styles.SmallImage />
              <Styles.SmallImage />
              <Styles.SmallImage />
            </div>
          </Styles.ContainerImages>

          <Styles.ContainerInfo>
            <h1>{sneakersProduct?.name}</h1>
            <Styles.ContainerFeedback>
              <AiOutlineStar size={25} color={theme.colors.textPrimary} />
              <AiOutlineStar size={25} color={theme.colors.textPrimary} />
              <AiOutlineStar size={25} color={theme.colors.textPrimary} />
              <AiOutlineStar size={25} color={theme.colors.textPrimary} />
              <AiOutlineStar size={25} color={theme.colors.textPrimary} />
            </Styles.ContainerFeedback>
            <p>{sneakersProduct?.description}</p>
          </Styles.ContainerInfo>
        </Styles.Top>

        <Styles.ContainerAside>
          <div className="price">
            <span>${sneakersProduct?.price}</span>
          </div>

          <hr />

          <Styles.Freight>
            <p>Calculate Freight</p>

            <div className="search-code">
              <input
                max="9"
                maxLength={9}
                name="Zip Code"
                type="number"
                placeholder="Zip Code"
                spellCheck="false"
              />
              <span>
                <AiOutlineSearch size={20} color={theme.colors.textTerceary} />
              </span>
            </div>
          </Styles.Freight>

          <hr />

          <Styles.AddToCart>
            <Button>Add to Cart</Button>
          </Styles.AddToCart>
          <Styles.Buy>
            <Button>Buy</Button>
          </Styles.Buy>
        </Styles.ContainerAside>
      </Styles.Wrapper>
      <Styles.Bottom>
        <Styles.AddComent></Styles.AddComent>
        <Styles.Coments></Styles.Coments>
      </Styles.Bottom>
    </Styles.Container>
  );
};

export default Product;
