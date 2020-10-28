import React, { useCallback, useContext } from "react";

import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';
import { ContainerNav } from "./styles";

import { useTheme } from '../../../../contexts/theme';
import dark from "../../../../styles/themes/dark";
import light from "../../../../styles/themes/light";

import { Link } from 'react-router-dom';

interface Props {
  open: boolean;
}

const RightNav: React.FC<Props> = ({ open }) => {
  const { colors, title } = useContext(ThemeContext);
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme, setTheme]);


  return (
    <ContainerNav open={open}>
      <ul>
        <li>
          <Link to="">Woman</Link>
        </li>
        <li>
          <Link to="">Man</Link>
        </li>
        <li>
          <Link to="">Delivery</Link>
        </li>
        <li>
          <Link to="">Contact us</Link>
        </li>
      </ul>

      <span>
        <Link to="/login">Login</Link>
        <Switch 
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}

          height={open ? 20 : 10}
          width={open ? 50 : 40}

          handleDiameter={open ? 40 : 20}
          offHandleColor={open ? colors.textTerceary : colors.primary}
          onHandleColor={colors.textPrimary}

          onColor={colors.primary}
          offColor={colors.textQuartenary}
        />
      </span>
    </ContainerNav>
  );
};

export default RightNav;
