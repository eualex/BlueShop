import React, { useCallback, useEffect } from "react";

import { useSessionUser } from "../../contexts/sessionUser";
import { useLogin } from "../../contexts/login";

import { AiOutlineClose } from "react-icons/ai";
import { Container } from "./styles";

const SessionUser: React.FC = () => {
  const {
    openSession,
    setOpenSession,
    messageSession,
    setMessageSession,
  } = useSessionUser();
  const { loginData, loginToken, setLoginData, setLoginToken } = useLogin();

  const handleSession = useCallback(() => {
    setTimeout(() => {
      if (!!loginToken || loginData.name!=="" || loginData.email!=="") {
        setLoginToken("");
        setLoginData({ email: "", name: "" });
        setMessageSession("Your session is over 😢. Sign in again!");
        setOpenSession(true);
      }
    }, 10000 * 1);
  }, [
    setLoginData,
    setLoginToken,
    loginToken,
    loginData,
    setMessageSession,
    setOpenSession,
  ]);

  useEffect(() => {
    if (!!loginToken || loginData.name!=="" || loginData.email!=="") handleSession();
  }, [loginToken, handleSession, loginData]);

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
