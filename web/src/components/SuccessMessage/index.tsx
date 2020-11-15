import React from 'react';

import { useSuccessMessage } from '../../contexts/success';

import { AiOutlineClose } from 'react-icons/ai';
import { Container } from './styles';

const SuccessMessage: React.FC = () => {
  const { messageSuccess, openSuccess, setOpenSuccess } = useSuccessMessage();

  return (
    <Container open={openSuccess}>
      <span>
        <AiOutlineClose onClick={() => setOpenSuccess(!openSuccess)}/>
      </span>
      <p>{messageSuccess}</p>
    </Container>
  );
};

export default SuccessMessage;
