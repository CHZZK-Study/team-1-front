/* eslint-disable */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import formatTime from '../../../utils/formatTime';
import {
  CardContainer,
  FormWrapper,
  InputBox,
  Button,
  SpanButton,
} from './AuthStyles';
import useAuthMutation from '../../../hooks/Auth/useAuthMutation';

const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & span {
    margin-left: 5px;
  }
`;

const TimerBox = styled.div`
  display: flex;
  margin: -5px 0;
`;

const EmailAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [code, setCode] = useState('');
  const [isTyped, setIsTyped] = useState(false);
  const [counter, setCounter] = useState(180);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const [isWrongCode, setIsWrongCode] = useState(false);

  const fetchEmailAuth = useAuthMutation(
    'http://localhost:8080/signup/email-auth',
  );
  const fetchCheckAuthCode = useAuthMutation(
    'http://localhost:8080/signup/email-auth-code',
  );

  const changeHandler = (event) => {
    if (event.target.value.length > 0) return setIsTyped(true);
    setIsTyped(false);
    setCode(event.target.value);
  };

  const retryClickHandler = () => {
    fetchEmailAuth.mutate(
      { email: location.state.email },
      {
        onSuccess: () => {
          setIsTimeOver(false);
          setIsWrongCode(false);
          setCounter(180);
        },
        onError: () => {
          // 서버에러 처리
        },
      },
    );
  };

  const clickCancelHandler = (event) => {
    event.preventDefault();
    navigate('/auth/signup');
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetchCheckAuthCode.mutate(
      { email: location.state.email, authentication_code: code },
      {
        onSuccess: () => {
          navigate('/auth/email-certified');
        },
        onError: () => {
          setIsWrongCode(true);
        },
      },
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 0) return setCounter((prev) => (prev -= 1));
      setIsTimeOver(true);
      clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <CardContainer onSubmit={submitHandler}>
      <h2>회원가입을 위해 확인 코드를 입력해 주세요.</h2>
      <NoticeBox>
        <p>회원가입시 사용한 이메일로 확인코드를 전송했어요.</p>
        <p>
          코드를 받지 못하셨나요?
          <SpanButton onClick={retryClickHandler}>코드 재전송</SpanButton>
        </p>
      </NoticeBox>
      <FormWrapper>
        <InputBox>
          <input type="text" onChange={changeHandler}></input>
          {isWrongCode && <p>인증코드가 잘못 됐어요.</p>}
        </InputBox>
        <TimerBox>
          {isTimeOver ? (
            <SpanButton onClick={retryClickHandler}>다시 전송하기</SpanButton>
          ) : (
            <span>{formatTime(counter)}</span>
          )}
        </TimerBox>
        <Button
          onClick={isTyped ? null : clickCancelHandler}
          buttonType={isTyped ? 'confirm' : 'cancel'}
        >
          {isTyped ? '완료' : '취소'}
        </Button>
      </FormWrapper>
    </CardContainer>
  );
};

export default EmailAuth;
