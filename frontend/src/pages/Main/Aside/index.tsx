import React, { useState, useEffect } from "react";

import Aos from 'aos';
import 'aos/dist/aos.css';

import { Container, ContainerFilter, Select, Wrapper } from "./styles";

import { RiArrowRightSLine } from "react-icons/ri";

import { useTheme } from '../../../contexts/theme';

const Aside: React.FC = () => {
  const { theme } = useTheme();

  const [hidden, setHidden] = useState(true);
  const [classContainerFilter, setClassContainerFilter] = useState("");
  const [fade, setFade] = useState("");

  const toggleFilter = () => {
    
    classContainerFilter === "show" ? 
    setClassContainerFilter("")   :
    setClassContainerFilter("show");
    
    setHidden(!hidden);
  }

  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, [])

  return (
    <Container>
      <ContainerFilter className={classContainerFilter}>  
        <span onClick={toggleFilter}>
          <span>
            <h4>FILTER</h4>
            <RiArrowRightSLine size={25} color={theme.colors.textPrimary} />
          </span>
        </span>

        <Wrapper Hidden={hidden}>
          <div>
            <Select >
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
          </div>
        </Wrapper>
      </ContainerFilter>
    </Container>
  );
};

export default Aside;
