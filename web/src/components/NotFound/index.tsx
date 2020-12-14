import React, { useEffect } from "react";
import { HiEmojiSad } from 'react-icons/hi'
import { useHistory } from "react-router-dom";

import { useTheme } from "../../contexts/theme";

import { Container } from "./styles";

interface NotFoundProps {
  title?: string;
  className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ title, className }) => {
  const { theme } = useTheme();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push('/'), 2000)
  })
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
