import styled from 'styled-components';

interface Props {
  open: boolean;
}

export const ContainerBurguer = styled.div<Props>`
  width: 40px;
  height: 30px;

  display: none;

  div {
    z-index: 20;

    background-color: ${ ({ open, theme }) => open ? theme.colors.textTerceary : theme.colors.primary };

    width: 30px;
    height: 3px;

    transform-origin: 1px;
    transition: all 0.3s linear;

    border-radius: 10px;

    &:nth-child(1) {
      transform: ${ ({ open }) => open ? 'rotate(45deg)' : 'rotate(0)' };
    }
    
    &:nth-child(2) {
      opacity: ${ ({ open }) => open ? 0 : 1 };
      transform: ${ ({ open }) => open ? 'translateX(100%)' : 'translateX(0)' };
    }
    &:nth-child(3) {
      transform: ${ ({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin-top: 5px;
  }
`;
