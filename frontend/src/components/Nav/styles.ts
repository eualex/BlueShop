import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 65%;

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

    @media (max-width: 700px) {
      display: none;
    }
  }

  .container-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    /* line-height: -19px; */

    /* @media (max-width: 700px) {
      display: 
    } */
  }
  
  .container-toggle.on {
    position: absolute;
    top: 0;
    left: 0;
    
    width: 100vw;
    height: 100vh;

    background-color: ${colors.blue};

    /* z-index: 10; */
  }

  .container-toggle.on nav {
    display: block;
    ul li a {
      color: #fff;
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
      font-size: 1.2rem;

      /* color: ${colors.text}; */
      color: #565656;

      &:hover {
        color: ${colors.blue};
        transition: 0.3s ease-in;
      }
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const ContainerMenuToggle = styled.div`
  width: 40px;
  height: 30px;
  margin-right: 20px;

  display: none;
  
  .one,
  .two,
  .three {
    background-color: ${colors.blue};
    height: 5px;
    width: 40px;
    margin: 6px auto;
  }

  @media (max-width: 700px) {
    display: block;

    /* width: 40px;
    height: 30px; */
    
  }
`;

export const ContainerFullScreen = styled.div`

`;

