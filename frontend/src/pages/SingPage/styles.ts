import styled from "styled-components";

interface Props {
  stateSing: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: relative;

  background: #fff;
  -webkit-box-shadow: -1px 6px 33px -6px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -1px 6px 33px -6px rgba(0, 0, 0, 0.15);
  box-shadow: -1px 6px 33px -6px rgba(0, 0, 0, 0.15);

  height: 100%;
  max-height: 480px;


  width: 100%;
  max-width: 980px;

  padding: auto;

  display: flex;
  align-items: center;
`;

export const ContainerLeft = styled.div`
  width: 50%;
  height: 100%;

  border-radius: 15px 0px 0px 15px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const ContainerRight = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  padding: 0px 80px 0px 40px;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 40%;

  margin: 20px 0px;
`;

export const ContainerStateSing = styled.div<Props>`
  color: #444;

  span:hover {
    cursor: pointer;
  }

  span:nth-child(1) {
    text-decoration: ${(props) => (props.stateSing ? "underline" : "none")};
    color: ${(props) =>
      props.stateSing
        ? ({ theme }) => theme.colors.primary
        : ({ theme }) => theme.colors.textQuartenary};
    font-size: ${(props) => (props.stateSing ? "2.6rem" : "2rem")};
    transition: all 0.5s ease; 
  }

  span:nth-child(2) {
    text-decoration: ${(props) => (props.stateSing ? "none" : "underline")};
    color: ${(props) =>
      props.stateSing
        ? ({ theme }) => theme.colors.textQuartenary
        : ({ theme }) => theme.colors.primary};
    font-size: ${(props) => (props.stateSing ? "2rem" : "2.6rem")};
  }
`;

export const Image = styled.img`
  width: 300px;
`;
