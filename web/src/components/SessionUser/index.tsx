import React, { useCallback, useEffect } from "react";

import { useSession } from "../../contexts/session";
import { useLogin } from "../../contexts/user";

import { AiOutlineClose } from "react-icons/ai";
import { Container } from "./styles";

const Session: React.FC = () => {
  const {
    openSession,
    setOpenSession,
    messageSession,
    setMessageSession,
  } = useSession();
  const {loginToken, setLoginToken } = useLogin();

  const handleSession = useCallback(() => {
    setLoginToken("");
    setMessageSession("Your session is over 😢. Sign in again!");
    setOpenSession(true);
  }, [ setLoginToken, setMessageSession, setOpenSession]);

  useEffect(() => {
    if (!!loginToken) {
      setTimeout(() => handleSession(), 60000*25);
    }
    return () => {};
  }, [loginToken, handleSession]);

  return (
    <Container open={openSession}>
      <span>
        <AiOutlineClose onClick={() => setOpenSession(!openSession)} />
      </span>
      <p>
        {!!messageSession
          ? messageSession
          : "Your session ends in 25 minutes. Enjoy 😊!"}
      </p>
    </Container>
  );
};

export default Session;
