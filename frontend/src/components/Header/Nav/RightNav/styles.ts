import styled from 'styled-components';

import colors from '../../../../styles/colors';

interface Props {
  open: boolean;
}

export const ContainerNav = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  
  ul {
    width: 45%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    list-style: none;

    > li a {
      text-decoration: none;
      font-weight: bold;
      font-size: 1.2rem;

      color: ${props => props.theme.colors.textSecondary};

      &:hover {
        color: ${props => props.theme.colors.primary};
        transition: 0.3s ease-in;
      }
    }
  }

  /* Login */
  span {
    width: 95px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      text-decoration: none;
      font-weight: bold;
      color: ${props => props.theme.colors.primary};

      &:hover {
        color: ${props => props.theme.colors.textPrimary};
        transition: 0.3s ease-in;
      }
    }
  }

  @media (max-width: 768px) {
    overflow: hidden;
    background-color: ${props => props.theme.colors.primary};

    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;

    transition: transform 0.3s ease-in-out;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    ul {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;

      width: 100%;

      margin-right: 13px;

      li {
        height: 60%;
        margin-bottom: 35px;
      }

      li a {
        font-size: 3rem;
        color: ${props => props.theme.colors.textTerceary};

        &:hover {
          color: ${props => props.theme.colors.textPrimary};
          transition: none;
        }
      }
    }

    span {
      margin-right: 13px;

      a {
        font-size: 3rem;
        color: #fff;

        &:hover {
          transition: none;
          color: ${props => props.theme.colors.textPrimary};
        }
      }
    }
  }
`;

