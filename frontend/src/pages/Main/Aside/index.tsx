import React from "react";

import { Container, ContainerFilter, Select, Wrapper } from "./styles";

import { RiArrowRightSLine } from "react-icons/ri";

import { useTheme } from '../../../contexts/theme';

const Aside: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Container>
      <ContainerFilter>  
        <span>
          <h4>FILTER</h4>
          <RiArrowRightSLine size={25} color={theme.colors.textPrimary} />
        </span>

        <Wrapper>
          <Select>
            <option value="Shoe Type">Shoe Type</option>
          </Select>

          <Select>
            <option value="Style">Style</option>
          </Select>

          <Select>
            <option value="Size">Size</option>
          </Select>

          <Select>
            <option value="Brand">Brand</option>
          </Select>

          <Select>
            <option value="Price range">Price range</option>
          </Select>
        </Wrapper>
      </ContainerFilter>
    </Container>
  );
};

export default Aside;
