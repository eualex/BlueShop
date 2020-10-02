import styled from 'styled-components';

import colors from '../../../../styles/colors';

interface Props {
  open: boolean;
}

export const ContainerBurguer = styled.div<Props>`
  width: 40px;
  height: 30px;
  margin-right: 20px;
  z-index: 50;

  display: none;

  .one,
  .two,
  .three {
    background-color: ${ ({ open }) => open ? '#fff' : colors.blue };
    
    border-radius: 5px;

    height: 3px;
    width: 30px;
    margin: 6px auto;

    transform-origin: 1px;
    transition: all 0.3s linear;

  }

  .one {
    transform: ${ ({ open }) => open ? 'rotate(45deg)' : 'rotate(0)' };
  }

  .two {
    transform: ${ ({ open }) => open ? 'translateX(100%)' : 'translateX(0)' };
    opacity: ${ ({ open }) => open ? 0 : 1 };
  }

  .three {
    transform: ${ ({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }


  @media (max-width: 768px) {
    display: block;

    margin-top: 13px;
  }
`;
