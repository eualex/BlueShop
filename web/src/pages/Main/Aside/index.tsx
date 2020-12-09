import React, { useCallback, useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import { handleGetUser } from "../../../services/user";
import { useTheme } from "../../../contexts/theme";
import { useLogin } from "../../../contexts/user";

import Select from "../../../components/Select";
import Button from "../../../components/Button";

import * as Styles from "./styles";

const Aside: React.FC = () => {
  const { theme } = useTheme();
  const { loginToken } = useLogin();

  const [hidden, setHidden] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [mount, setMount] = useState(false);
  const [classContainerFilter, setClassContainerFilter] = useState("");

  const toggleFilter = () => {
    classContainerFilter === "show"
      ? setClassContainerFilter("")
      : setClassContainerFilter("show");

    setHidden(!hidden);
  };

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
    <Styles.Container>
      <Styles.ContainerFilter className={classContainerFilter}>
        <span onClick={toggleFilter}>
          <span>
            <h4>FILTER</h4>
            <RiArrowRightSLine size={25} color={theme.colors.textTerceary} />
          </span>
        </span>
        <Styles.Wrapper Hidden={hidden}>
          <div>
            <Select title="Shoe Type" options={["teste"]} customSize="small" />
            <Select title="Style" options={["teste"]} customSize="small" />
            <Select title="Size" options={["teste"]} customSize="small" />
            <Select title="Brand" options={["teste"]} customSize="small" />

            <Select
              title="Price range"
              options={["teste"]}
              customSize="small"
            />
          </div>
        </Styles.Wrapper>
      </Styles.ContainerFilter>

      {admin && (
        <Styles.ContainerCreateProduct>
          <Button link="register-product">Add a Product</Button>
        </Styles.ContainerCreateProduct>
      )}
    </Styles.Container>
  );
};

export default Aside;
