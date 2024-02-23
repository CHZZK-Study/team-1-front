/* eslint-disable */

import styled from 'styled-components';
import { useState } from 'react';
import Input from './UI/Input';

const SignUpForm = styled.form`
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

const SignUpButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 2px;
  color: #fff;
  background-color: #5865f2;
  font-weight: 800;
`;

const InputBox = styled.div`
  width: 360px;
  & label {
    font-size: 0.8rem;
    font-weight: 800;
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
const validateEmail = (value) => !value.includes('@');
const validatePassword = (value) => {
  const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
  return !check.test(value);
};

function SignUp() {
  return (
    <SignUpForm>
      <h2>계정 만들기</h2>
      <InputBox>
        <label>이메일</label>
        <input id="email" type="text" />
        <p>이메일을 입력해 주세요.</p>
      </InputBox>
      <InputBox>
        <label>비밀번호</label>
        <input id="password" type="password"></input>
        <p>비밀번호는 대문자, 소문자, 숫자, 특수문자 조합을 사용해 주세요.</p>
      </InputBox>
      <InputBox>
        <label>비밀번호 확인</label>
        <input id="passwordConfirm" type="password"></input>
        <p>비밀번호가 일치하지 않습니다.</p>
      </InputBox>
      <InputBox>
        <label>별명</label>
        <input id="nickName" type="text"></input>
        <p>입력하지 않을경우 랜덤 별명이 발급 됩니다.</p>
      </InputBox>
      <SignUpButton type="submit">계속하기</SignUpButton>
    </SignUpForm>
  );
}

export default SignUp;
