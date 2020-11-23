import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useTheme } from "../../contexts/theme";
import { EletronicsProps, SneakersProps } from "../../utils/product";

import * as Styles from "./styles";

interface PropsPrimaryInfo {
  sneakersProduct?: SneakersProps;
  eletronicsProduct?: EletronicsProps;
}

const PrimaryInfo: React.FC<PropsPrimaryInfo> = ({
  eletronicsProduct,
  sneakersProduct,
}) => {
  const { theme } = useTheme();

  return (
    <Styles.ContainerPrimaryInfo>
      <Styles.ContainerImages>
        <Styles.Image src={sneakersProduct?.images[0].url || eletronicsProduct?.images[0].url} alt="Product" />
        <div className="images">
          <Styles.SmallImage />
          <Styles.SmallImage />
          <Styles.SmallImage />
          <Styles.SmallImage />
        </div>
      </Styles.ContainerImages>

      <Styles.ContainerInfo>
        <h1>{sneakersProduct?.name || eletronicsProduct?.name}</h1>
        <Styles.ContainerFeedback>
          <AiOutlineStar size={25} color={theme.colors.textPrimary} />
          <AiOutlineStar size={25} color={theme.colors.textPrimary} />
          <AiOutlineStar size={25} color={theme.colors.textPrimary} />
          <AiOutlineStar size={25} color={theme.colors.textPrimary} />
          <AiOutlineStar size={25} color={theme.colors.textPrimary} />
        </Styles.ContainerFeedback>
        <p>{sneakersProduct?.description || eletronicsProduct?.description}</p>
      </Styles.ContainerInfo>
    </Styles.ContainerPrimaryInfo>
  );
};

export default PrimaryInfo;
