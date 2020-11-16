import React from 'react';

import { Container } from './styles';

interface ErrorProps {
  status?: string;
  message?: string;
  error?: boolean;
}

const ErrorsPage: React.FC<ErrorProps> = ({ message="Not Found", status="404", error }) => {
  return (
    <Container>
      <h1>{error && "Error"}</h1>
      <h2>{status}</h2>
      <h2>{message}</h2>
    </Container>
  );
};

export default ErrorsPage;
