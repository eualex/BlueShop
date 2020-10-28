import React from 'react';

import { useMessage } from '../../contexts/messageError';
import { useOpen } from '../../contexts/open';

import { AiOutlineClose } from 'react-icons/ai';
import { Container } from './styles';

const ErrorMessage: React.FC = () => {
  const { openMessage, setOpenMessage } = useOpen();
  const { messageError } = useMessage();

  return (
    <Container open={openMessage}>
      <span>
        <AiOutlineClose onClick={() => setOpenMessage(!openMessage)}/>
      </span>
      <p>{messageError}</p>
    </Container>
  );
};

export default ErrorMessage;
