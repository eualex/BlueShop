import React, { useCallback } from "react";
import Switch from "react-switch";
import { Link, useHistory } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import { ContainerNav } from "./styles";
import Dropdown from "./Dropdown";

import { useTheme } from "../../../../contexts/theme";
import { useLogin } from "../../../../contexts/login";
import { useOpen } from "../../../../contexts/burguerMenu";

import dark from "../../../../styles/themes/dark";
import light from "../../../../styles/themes/light";

interface Props {
  open: boolean;
}

const RightNav: React.FC<Props> = ({ open }) => {
  const history = useHistory();

  const { setOpen } = useOpen();
  const { theme, setTheme } = useTheme();
  const { loginToken } = useLogin();

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme, setTheme]);

  return (
    <ContainerNav open={open}>
      <ul>
        <li className="only-mobile">
          <span
            onClick={() => {
              setOpen(false);
              // history.push("category");
            }}
          >
            Shop Car
          </span>
        </li>
        <li className="only-mobile">
          <span
            onClick={() => {
              setOpen(false);
              history.push("category");
            }}
          >
            Categories
          </span>
        </li>
        <li className="only-pc">
          <span className="title">Eletronics</span>
          <Dropdown
            className="dropdown"
            name="eletronics"
            items={["Smartphone", "Notebook", "All"]}
          />
        </li>
        <li className="only-pc">
          <span className="title">Sneakers</span>
          <Dropdown
            className="dropdown"
            name="sneakers"
            items={["Woman", "Man", "All"]}
          />
        </li>
        <li>
          <span className="title">Delivery</span>
        </li>
        <li>
          <span className="title">Contact us</span>
        </li>
      </ul>

      <span>
        <div className="only-pc">
          <FiShoppingCart size={25} color={theme.colors.textPrimary} />
        </div>

        {!loginToken && (
          <Link className="login" to="/login">
            Sing In
          </Link>
        )}

        <Switch
          onChange={toggleTheme}
          checked={theme.title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={open ? 20 : 10}
          width={open ? 50 : 40}
          handleDiameter={open ? 40 : 20}
          offHandleColor={
            open ? theme.colors.textTerceary : theme.colors.primary
          }
          onHandleColor={theme.colors.textPrimary}
          onColor={theme.colors.primary}
          offColor={theme.colors.textQuartenary}
        />
      </span>
    </ContainerNav>
  );
};

export default RightNav;
