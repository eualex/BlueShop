import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "../../components/Button";
import { useTheme } from "../../contexts/theme";
import { RootProduct } from "../../utils/product";

import * as Styles from "./styles";

interface PropsAside {
  sneakersProduct?: RootProduct;
  eletronicsProduct?: RootProduct;
}

const Aside: React.FC<PropsAside> = ({
  eletronicsProduct,
  sneakersProduct,
}) => {
  const { theme } = useTheme();

  return (
    <Styles.ContainerAside>
      <div className="price">
        <span>${sneakersProduct?.price || eletronicsProduct?.price}</span>
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
  );
};

export default Aside;
