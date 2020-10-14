import styled from "styled-components";

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
  -webkit-box-shadow: -1px 6px 33px -6px rgba(0,0,0,0.15);
  -moz-box-shadow: -1px 6px 33px -6px rgba(0,0,0,0.15);
  box-shadow: -1px 6px 33px -6px rgba(0,0,0,0.15);

  height: 100%;
  max-height: 480px;

  border-radius: 10px;

  width: 100%;
  max-width: 980px;

  padding: auto;

  display: flex;
  align-items: center;
  /* justify-content: space-around; */

  
`;

export const ContainerLeft = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};

  width: 50%;
  height: 100%;

  border-radius: 15px 0px 0px 15px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  flex-direction: column;

  h1 {
    color: #fff;
  }
`;

export const ContainerRight = styled.div`
  /* background: red; */
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  padding: 0px 30px;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 40%;
  /* width: 80%; */

  margin: 20px 0px;
`;

export const ContainerStateForm = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const Image = styled.img`
  width: 300px;
`;
