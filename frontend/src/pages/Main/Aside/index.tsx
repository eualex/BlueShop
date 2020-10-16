import React from "react";

import { Container, ContainerSort, ContainerFilter, Select } from "./styles";

const Aside: React.FC = () => {
  return (
    <Container>
      <ContainerSort>
        <h5>SORT</h5>

        <Select>
          <option value="what's new">what's new</option>
        </Select>
      </ContainerSort>

      <ContainerFilter>  
        <h5>FILTER</h5>

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
      </ContainerFilter>
    </Container>
  );
};

export default Aside;
