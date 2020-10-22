import styled from 'styled-components';

export const Container = styled.div`
  height: 73vh;
  width: 25%;

  @media(max-width: 768px) {
    width: 100%;
    padding-bottom: 30px;
  }
`;

export const ContainerFilter = styled.div`
  background: ${({ theme }) => theme.colors.backgroundMain};

  padding: 40px 40px 20px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  span {
    h4 {
      color: ${({ theme }) => theme.colors.textPrimary};
      margin-bottom: 10px;

      opacity: 0.7;
    }

    svg {
      display: none;
    }
  }

  @media(max-width: 768px) {
    width: 80%;
    margin: 0 auto;
    /* height: 10%; */
    /* margin-bottom: 10px; */
    padding: 0;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 70%;
      margin: 0 auto;

      padding: 15px 0 ;

      h4 {
        margin: 0;
      }

      svg {
        display: block;
        transition: all 0.4s ease;

        opacity: 0.7;
      }
    }
    
    &:hover {
      div {
        display: block;

        width: 80%;
        margin: 0 auto;

        padding: 0 20px 20px 0;
      }

      span svg {
        margin-bottom: 4px;
        
        transform: rotate(90deg);
      }
    }

  }
`;

export const Select = styled.select`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textLogin};

  width: 100%;
  padding: 10px 11px;

  border: none;
  border-radius: 3px;
`;

export const Wrapper = styled.div`
  width: 100%;

  select {
    margin: 10px;
  }

  @media(max-width: 768px) {
    display: none;

    transition: opacity 1s ease;
  }
`;

