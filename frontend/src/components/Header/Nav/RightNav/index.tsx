import React, { useCallback, useContext } from "react";
import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';
import { ContainerNav } from "./styles";

import { useTheme } from '../../../../contexts/theme'
import dark from "../../../../styles/themes/dark";
import light from "../../../../styles/themes/light";
 
interface Props {
  open: boolean;
}

const RightNav: React.FC<Props> = ({ open }) => {
  const { colors, title } = useContext(ThemeContext);
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
    // console.log(theme.title);
  }, [theme]);


  return (
    <ContainerNav open={open}>
      <ul>
        <li>
          <a href="#">Woman</a>
        </li>
        <li>
          <a href="#">Man</a>
        </li>
        <li>
          <a href="#">Delivery</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>

      <span>
        <a href="#">Login</a>
        <Switch 
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}

          height={10}
          width={40}

          handleDiameter={20}
          offHandleColor={colors.textPrimary}
          onHandleColor={colors.textPrimary}

          onColor={colors.primary}
          offColor={colors.textQuartenary}
        />
      </span>
    </ContainerNav>
  );
};

export default RightNav;
