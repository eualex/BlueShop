import styled from 'styled-components';

export const Container = styled.div`
  height: 73vh;
  width: 25%;
`;

export const ContainerSort = styled.div`
  padding: 20px 30px;
  height: 30%;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  border: 1px solid  rgba(89, 95, 110, 0.2);
`;

export const ContainerFilter = styled.div`
  background: #B8CDFA ;

  height: 73%;

  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Select = styled.select`
  /* -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none; */
 
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textLogin};

  width: 100%;
  padding: 10px 11px;

  border: none;
  border-radius: 3px;
  
  /* opacity: 0.7; */
`;

