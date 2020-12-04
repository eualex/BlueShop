import React, { useCallback, useEffect } from "react";

import { useSessionUser } from "../../contexts/sessionUser";
import { useLogin } from "../../contexts/user";

import { AiOutlineClose } from "react-icons/ai";
import { Container } from "./styles";

const SessionUser: React.FC = () => {
  const {
    openSession,
    setOpenSession,
    messageSession,
    setMessageSession,
  } = useSessionUser();
  const { userData, loginToken, setUserData, setLoginToken } = useLogin();

  const handleSession = useCallback(() => {
    setLoginToken("");
    setUserData({ email: "", name: "" });
    setMessageSession("Your session is over 😢. Sign in again!");
    setOpenSession(true);
  }, [setUserData, setLoginToken, setMessageSession, setOpenSession]);

  useEffect(() => {
    if (!!loginToken && userData.name !== "" && userData.email !== "") {
      setTimeout(() => handleSession(), 60000*25);
    }
    return () => {};
  }, [loginToken, handleSession, userData]);

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

export default SessionUser;
