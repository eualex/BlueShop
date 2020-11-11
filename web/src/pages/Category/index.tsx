import React from 'react';

import { useHistory } from 'react-router-dom';

import * as Styles from './styles';

import { useTheme } from '../../contexts/theme';
import { useCategory } from '../../contexts/category';

interface PropsCategory {
  name: string;
  item: string;
}

const ChooseCategory: React.FC = () => {
  const history = useHistory();

  const { theme } = useTheme();
  const { setCategory } = useCategory();

  const handleCategory = (category: PropsCategory) => {
    setCategory(category);

    history.push("main");
  }

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <span>
          <h1>Choose a Category</h1>
        </span>

        <Styles.ContainerDropdown>
          <Styles.Dropdown>
            <span>
              <p>Eletronics</p>
              <Styles.Icon color={theme.colors.textPrimary} size={25}/>
            </span>
            <ul>
              <li><span onClick={() => handleCategory({ name: "eletronics", item: "smartphones" })}>Smartphones</span></li>
              <li><span onClick={() => handleCategory({ name: "eletronics", item: "notebooks" })}>Notebooks</span></li>
              <li><span onClick={() => handleCategory({ name: "eletronics", item: "all" })}>All</span></li>
            </ul>
          </Styles.Dropdown>

          <Styles.Dropdown>
            <span>
              <p>Sneakers</p>
              <Styles.Icon color={theme.colors.textPrimary} size={25}/>
            </span>
            <ul>
              <li><span onClick={() => handleCategory({ name: "eletronics", item: "woman" })}>Woman</span></li>
              <li><span onClick={() => handleCategory({ name: "eletronics", item: "man" })}>Man</span></li>
              <li><span onClick={() => handleCategory({ name: "eletronics", item: "all" })}>All</span></li>
            </ul>
          </Styles.Dropdown>
        </Styles.ContainerDropdown>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default ChooseCategory;
