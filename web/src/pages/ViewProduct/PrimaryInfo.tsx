import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

import { handleGetUser } from "../../services/user";

import { useTheme } from "../../contexts/theme";
import { useLogin } from "../../contexts/user";
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
  const history = useHistory();
  const { theme } = useTheme();
  const { loginToken } = useLogin();

  const [mount, setMount] = useState(false);
  const [admin, setAdmin] = useState(false);

  const isAdmin = useCallback(async () => {
    if (loginToken) {
      try {
        if (mount) {
          const user = await handleGetUser();
          setAdmin(user.admin);
        }
      } catch (err) {
        setAdmin(false);
      }
    } else setAdmin(false);
  }, [loginToken, mount]);

  useEffect(() => {
    setMount(true);
    isAdmin();
    return () => setMount(false);
  }, [isAdmin]);

  return (
    <Styles.ContainerPrimaryInfo>
      <Styles.ContainerImages>
        <Styles.Image
          src={
            sneakersProduct?.images[0].url || eletronicsProduct?.images[0].url
          }
          alt="Product"
        />
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

      {admin && (
        <span
          className="icon-to-edit"
          onClick={() => history.push("/edit-product")}
        >
          <FiEdit2 color={theme.colors.textPrimary} size={25} />
        </span>
      )}
    </Styles.ContainerPrimaryInfo>
  );
};

export default PrimaryInfo;
