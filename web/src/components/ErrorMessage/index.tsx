import React from 'react';

import { useErrorMessage } from '../../contexts/error';

import { AiOutlineClose } from 'react-icons/ai';
import { Container } from './styles';

const ErrorMessage: React.FC = () => {
  const { openError, setOpenError, messageError } = useErrorMessage();

  return (
    <Container open={openError}>
      <span>
        <AiOutlineClose onClick={() => setOpenError(!openError)}/>
      </span>
      <p>{messageError}</p>
    </Container>
  );
};

export default ErrorMessage;
