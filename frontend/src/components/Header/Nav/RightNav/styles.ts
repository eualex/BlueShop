import styled from 'styled-components';

import colors from '../../../../styles/colors';

interface Props {
  open: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  /* Login */
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

  @media (max-width: 768px) {
    background-color: ${colors.blue};

    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 60%;

    transition: transform 0.3s ease-in-out;
  }
`;

export const ContainerNav = styled.div`
  width: 300px;
  
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    list-style: none;

    > li a {
      text-decoration: none;
      font-weight: bold;
      font-size: 1.2rem;

      /* color: ${colors.text}; */
      color: #565656;

      &:hover {
        color: ${colors.blue};
        transition: 0.3s ease-in;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;

      li {
        height: 60%;
        margin-bottom: 35px;
      }

      li a {
        font-size: 3.6rem;
        color: #fff;
        
      }
    }
  }
`;

