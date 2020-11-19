import React from "react";
import { HiEmojiSad } from 'react-icons/hi'

import { useTheme } from "../../contexts/theme";
import Header from "../Header";

import { Container } from "./styles";

const ErrorsPage: React.FC = () => {
  const { theme } = useTheme();
  return (
    <Container>
      <Header />
      <div className="not-found">
        <h1>Page not found</h1>

        <HiEmojiSad size={100} color={theme.colors.textPrimary} />
      </div>
    </Container>
  );
};

export default ErrorsPage;
