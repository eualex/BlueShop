import styled from 'styled-components';
import colors from '../../styles/colors';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 65%;

  /* Login and Icons */
  span {
    width: 95px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      text-decoration: none;
      font-weight: bold;
      color: ${colors.blue};

      &:hover {
        color: ${colors.text};
        transition: 0.3s ease-in;
      }
    }
  }
`;

export const ContainerNav = styled.div`
  width: 300px;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;

    > li a {
      text-decoration: none;
      font-weight: bold;
      font-size: 12px;

      color: ${colors.text};

      &:hover {
        color: ${colors.blue};
        transition: 0.3s ease-in;
      }
    }
  }
`;

export const IconShop = styled(AiOutlineShopping)`
  color: ${colors.blue};

  &:hover {
    color: ${colors.text};
      transition: 0.3s ease-in;

    cursor: pointer;
  }
`;

export const IconSearch = styled(AiOutlineSearch)`
  color: ${colors.blue};

  &:hover {
    color: ${colors.text};
    transition: 0.3s ease-in;

    cursor: pointer;
  }
`;
