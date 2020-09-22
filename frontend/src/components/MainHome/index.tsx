import React from 'react';

import svgI from '../../img/ilustration.svg'

import { Container } from './styles';

const MainHome: React.FC = () => {
  return (
    <Container>
      <span>
        <p>
          Compre e venda com segurança na Blue, o nosso chefe, Cobaíba, devolve
          seu dinheiro com o dobro do valor, caso haja algum imprevisto!
        </p>

        <button>
          COMPRAR NA BLUE
        </button>
      </span>

      <img src={svgI} alt="ilustração" />
      
    </Container>
  );
};

export default MainHome;
