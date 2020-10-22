import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Wrapper, Dropdown, ContainerDropdown, Icon } from './styles';

import { useTheme } from '../../../contexts/theme';

const ChooseCategory: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Container>
      <Wrapper>
        <span>
          <h1>Choose a Category</h1>
        </span>

        <ContainerDropdown>
          <Dropdown>
            <span>
              <p>Eletronics</p>
              <Icon color={theme.colors.textPrimary} size={25}/>
            </span>
            <ul>
              <li><Link to="">Smartphones</Link></li>
              <li><Link to="">Notebooks</Link></li>
            </ul>
          </Dropdown>

          <Dropdown>
            <span>
              <p>Sneakers</p>
              <Icon color={theme.colors.textPrimary} size={25}/>
            </span>
            <ul>
              <li><Link to="">Woman</Link></li>
              <li><Link to="">Man</Link></li>
            </ul>
          </Dropdown>
        </ContainerDropdown>
      </Wrapper>
    </Container>
  );
};

export default ChooseCategory;
