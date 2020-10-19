import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;

  /* height: 90%; */
  /* width: 28%; */

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: 1px solid  rgba(89, 95, 110, 0.2);
`;

export const Header = styled.header`

  h4 {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    color: ${({ theme }) => theme.colors.textLogin};
    font-size: 1.2rem; 
  }

`;

export const Image = styled.img`
  width: 180px;

  padding: 40px 0px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;

  h6 {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    color: ${({ theme }) => theme.colors.textLogin};
    font-size: 1.2rem; 
  }

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
    text-align: center;
  }
 
`;

export const ButtonAddToCart = styled(Link)`
  width: 40px;
  height: 40px;

  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  display: none;

`;
