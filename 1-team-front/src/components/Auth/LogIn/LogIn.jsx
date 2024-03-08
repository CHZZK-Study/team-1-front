/* eslint-disable */
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import {
  CardContainer,
  FormWrapper,
  InputBox,
  Button,
  SpanButton,
} from '../AuthStyles';
import useAuthMutation from '../../../hooks/Auth/useAuthMutation';

const FooterBox = styled.div`
  display: flex;
  gap: 8px;
`;

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const fetchLogin = useAuthMutation('http://localhost:8080/login');

  const chageInputHandler = (value, setFn) => {
    setFn(value);
  };

  const loginSubmitHander = (event) => {
    event.preventDefault();
    fetchLogin.mutate(
      { email: email, password: password },
      {
        onSuccess: (res) => {
          setIsError(false);
          localStorage.clear();
          localStorage.setItem('email', res.data.email);
          localStorage.setItem('token', res.data.token);
          navigate('/');
        },
        onError: () => {
          setIsError(true);
        },
      },
    );
  };

  const findPasswordClickHandler = () => {
    navigate('/auth/find-password');
  };

  return (
    <CardContainer onSubmit={loginSubmitHander}>
      <h2>환영합니다 !</h2>
      <FormWrapper>
        <InputBox>
          <label htmlFor="email">
            이메일
            <span> *</span>
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(event) =>
              chageInputHandler(event.target.value, setEmail)
            }
          ></input>
        </InputBox>
        <InputBox>
          <label htmlFor="password">
            비밀번호
            <span> *</span>
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) =>
              chageInputHandler(event.target.value, setPassword)
            }
          ></input>
          {isError && <p>이메일 또는 비밀번호가 일치하지 않습니다.</p>}
          <SpanButton onClick={findPasswordClickHandler}>
            비밀번호를 잊으셨나요 ?
          </SpanButton>
        </InputBox>
        <Button buttonType="confirm">로그인</Button>
      </FormWrapper>
      <FooterBox>
        <p>계정이 필요한가요 ?</p>
        <SpanButton>가입하기</SpanButton>
      </FooterBox>
    </CardContainer>
  );
};

export default LogIn;
