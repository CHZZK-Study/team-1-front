/* eslint-disable */
import { useState } from 'react';
import styled, { css } from 'styled-components';

const buttonType = {
  cancel: css`
    background-color: #2f3136;
    &:hover {
      background-color: #40444b;
    }
  `,
  confirm: css`
    background-color: #5865f2;
    &:hover {
      background-color: #4752c4;
    }
  `,
};

const EmailAuthForm = styled.form`
  padding: 40px 30px;
  background-color: #36393f;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  & h2 {
    color: #fff;
  }
`;

const InputBox = styled.div`
  width: 360px;
  & label {
    font-size: 0.8rem;
    font-weight: 800;
    & span {
      color: #ed4245;
    }
  }
  & input {
    width: 95%;
    height: 30px;
    background-color: #18191c;
    border-radius: 2px;
    margin: 5px 0;
    color: #fff;
    padding: 5px 10px;
    font-size: 0.9rem;
  }
  & p {
    font-size: 0.8rem;
    color: #ed4245;
  }
`;

const EmailAuthButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 2px;
  color: #fff;
  font-weight: 800;
  transition: all 0.3s linear;
  border: 0;
  ${(props) => buttonType[props.type]}
`;

const NoticeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & span {
    color: #00aff4;
    font-weight: 600;
    cursor: pointer;
  }
  & span:hover {
    text-decoration: underline;
  }
`;

const EmailAuth = () => {
  const [isTyped, setIsTyped] = useState(false);
  const changeHandler = (event) => {
    if (event.target.value.length > 0) return setIsTyped(true);
    setIsTyped(false);
  };

  return (
    <EmailAuthForm>
      <h2>회원가입을 위해 확인 코드를 입력해 주세요.</h2>
      <NoticeBox>
        <p>회원가입시 사용한 이메일로 확인코드를 전송했어요.</p>
        <p>
          코드를 받지 못하셨나요? <span>코드 재전송</span>
        </p>
      </NoticeBox>
      <InputBox>
        <input type="text" onChange={changeHandler}></input>
        <p>인증코드가 잘못 됐어요.</p>
      </InputBox>
      <EmailAuthButton type={isTyped ? 'confirm' : 'cancel'}>
        {isTyped ? '완료' : '취소'}
      </EmailAuthButton>
    </EmailAuthForm>
  );
};

export default EmailAuth;
