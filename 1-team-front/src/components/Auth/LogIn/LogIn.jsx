/* eslint-disable */
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import {
  CardContainer,
  FormWrapper,
  InputBox,
  Button,
  SpanButton,
} from '../AuthStyles';

const FooterBox = styled.div`
  display: flex;
  gap: 8px;
  & p {
    font-size: 0.8rem;
  }
`;

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const fetchLogin = async (data) => {
    const url = 'http://localhost:8080/login';
    const payload = data;
    return await axios.post(url, payload);
  };

  const submitLogin = useMutation(fetchLogin, {
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
  });

  const chageInputHandler = (value, setFn) => {
    setFn(value);
  };

  const loginSubmitHander = (event) => {
    event.preventDefault();
    submitLogin.mutate({ email: email, password: password });
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
          <span onClick={findPasswordClickHandler}>
            비밀번호를 잊으셨나요 ?
          </span>
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
