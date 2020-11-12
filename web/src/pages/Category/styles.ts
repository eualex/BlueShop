import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";

interface Props {
  Hidden: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  flex-direction: column;

  display: flex;
  justify-content: center;
  align-items: center;

  .arrow-sneakers {
    span span svg {
      margin-bottom: 4px;

      transform: rotate(90deg);
    }
  }

  .arrow-eletronics {
    span span svg {
      margin-bottom: 4px;

      transform: rotate(90deg);
    }
  }
`;

export const Title = styled.span`
  margin: 100px 0 60px 0;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  max-width: 980px;
  margin: 0 auto;

  padding-top: 40px;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const ContainerDropdown = styled.div`
  background: ${({ theme }) => theme.colors.backgroundTerceary};
  
  margin-bottom: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 80%;
  padding: 0;

  span span span {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 2rem;
  }

  span span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 70%;
    margin: 0 auto;

    padding: 10px 0;

    h4 {
      margin: 0;
    }

    svg {
      display: block;
      transition: all 0.4s ease;
    }
  }
`;

export const WrapperDropdown = styled.div<Props>`
  max-height: ${(props) => (props.Hidden ? "0px" : "500px")};

  width: 80%;
  margin: 0 auto;

  transition: max-height 1.1s ease;

  div {
    visibility: ${(props) => (props.Hidden ? "hidden" : "visible")};

    overflow: hidden;
    width: 100%;

    transition: visibility 0.3s linear;
    padding: 0 30px;

    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: right;

    span {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.colors.textPrimary};
      padding: 10px 0;

      transition: all 0.3s ease;

      transform: ${props => props.Hidden ? "translateX(-100%)" : "translateX(0)"};
        transition: transform 0.4s linear;

      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const Icon = styled(RiArrowRightSLine)``;
