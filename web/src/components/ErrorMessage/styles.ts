import styled from 'styled-components';

interface Props {
  open: boolean;
}

export const Container = styled.div<Props>`
  visibility: ${(props) => props.open ? 'visible' : 'hidden'};

  transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s linear;

  background: #FF312E;
  color: #fff;
  
  width: 300px;

  padding: 30px 10px;
  margin: 30px;

  position: absolute;
  top: 0;
  right: 0;

  z-index: 20;

  display: flex;
  justify-content : center;
  align-items: center;

  span {

    position: absolute;
    top: 0;
    right: 0;

    padding: 10px 10px 0 0;

    svg {
      cursor: pointer;
    }
  }

  @media(max-width: 768px) {
    margin: 30px;

    position: fixed;
    right: auto;
    
    span svg {
      width: 25px;
      height: 25px;
    }
  }
`;
