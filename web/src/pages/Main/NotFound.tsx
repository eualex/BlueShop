import React from "react";
import { HiEmojiSad } from "react-icons/hi";
import { useTheme } from "../../contexts/theme";

interface PropsNotFound {
  className?: string;
}

const NotFound: React.FC<PropsNotFound> = ({ className }) => {
  const { theme } = useTheme()

  return (
    <div className={className}>
      <h1>Products not found</h1>

      <HiEmojiSad size={100} color={theme.colors.textPrimary} />
    </div>
  );
};

export default NotFound;
