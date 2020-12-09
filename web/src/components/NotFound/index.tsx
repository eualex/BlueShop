import React from "react";
import { HiEmojiSad } from 'react-icons/hi'

import { useTheme } from "../../contexts/theme";

import { Container } from "./styles";

interface NotFoundProps {
  title?: string;
  className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ title, className }) => {
  const { theme } = useTheme();
  return (
    <Container>
      <div className={className || "not-found"}>
        <h1>{title || "Page"} not found</h1>

        <HiEmojiSad size={100} color={theme.colors.textPrimary} />
      </div>
    </Container>
  );
};

export default NotFound;
