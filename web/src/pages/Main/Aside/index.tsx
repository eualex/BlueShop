import React, { useState } from "react";

import * as Styles from "./styles";
import { RiArrowRightSLine } from "react-icons/ri";
import Select from "../../../components/Select";

import { useTheme } from "../../../contexts/theme";

const Aside: React.FC = () => {
  const { theme } = useTheme();

  const [hidden, setHidden] = useState(true);
  const [classContainerFilter, setClassContainerFilter] = useState("");

  const toggleFilter = () => {
    classContainerFilter === "show"
      ? setClassContainerFilter("")
      : setClassContainerFilter("show");

    setHidden(!hidden);
  };

  return (
    <Styles.Container>
      <Styles.ContainerFilter className={classContainerFilter}>
        <span onClick={toggleFilter}>
          <span>
            <h4>FILTER</h4>
            <RiArrowRightSLine size={25} color={theme.colors.textPrimary} />
          </span>
        </span>

        <Styles.Wrapper Hidden={hidden}>
          <div>
            <Select title="Shoe Type" options={["teste"]} customSize="small"/>

            <Select title="Style" options={["teste"]} customSize="small"/>

            <Select title="Size" options={["teste"]} customSize="small"/>

            <Select title="Brand" options={["teste"]} customSize="small"/>

            <Select title="Price range" options={["teste"]} customSize="small"/>
          </div>
        </Styles.Wrapper>
      </Styles.ContainerFilter>
    </Styles.Container>
  );
};

export default Aside;
