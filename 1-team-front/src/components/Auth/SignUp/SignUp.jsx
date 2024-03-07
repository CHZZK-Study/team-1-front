/* eslint-disable */

import { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import useAuthStore from '../../../stores/Auth/auth';
import createRandomNickName from '../../../utils/createRandomNickName';
import { FormContainer, InputBox, Button } from './AuthStyles';

function SignUp() {
  const { setAuthForm } = useAuthStore();
  const navigate = useNavigate();

  const [email, setEmail] = useState({ email: '', isWarn: false });
  const [password, setPassword] = useState({ password: '', isWarn: false });
  const [passwordConfirm, setPasswordConfirm] = useState({
    passwordConfirm: '',
    isWarn: false,
  });
  const [nickName, setNickName] = useState({ nickName: '', isWarn: false });
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);

  const fetchEmailAuth = async (data) => {
    const url = 'http://localhost:8080/signup/email-check';
    const payload = data;
    return await axios.post(url, payload);
  };

  const { mutate } = useMutation(fetchEmailAuth, {
    onSuccess: () => {
      setAuthForm({
        email: email.email,
        password: password.password,
        nickName:
          nickName.nickName.length > 0
            ? nickName.nickName
            : createRandomNickName(),
      });
      navigate('/auth/email-auth');
    },
    onError: () => {
      setEmail((prev) => {
        return { ...prev, isWarn: true };
      });
      setIsEmailDuplicated(true);
    },
  });

  const validateEmail = (value) => value.includes('@');
  const validatePassword = (value) => {
    const check =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    return check.test(value);
  };
  const validatePasswordConfirm = (value) => {
    return value === password.password;
  };
  const validateNickName = (value) => {
    return value.length !== 0;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    mutate({ email: email.email });
  };

  const blurHandler = (id, value, setFn, validationFn) => {
    if (validationFn(value)) return setFn({ [id]: value, isWarn: false });
    if (id === 'email') setIsEmailDuplicated(false);
    setFn((prev) => {
      return { ...prev, isWarn: true };
    });
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <h2>계정 만들기</h2>
      <form>
        <InputBox>
          <label>
            이메일
            <span> *</span>
          </label>
          <input
            id="email"
            type="text"
            onBlur={(event) =>
              blurHandler(
                event.target.id,
                event.target.value,
                setEmail,
                validateEmail,
              )
            }
          />
          {email.isWarn && (
            <p>
              {isEmailDuplicated
                ? '이미 가입된 이메일 입니다.'
                : '이메일을 입력해 주세요.'}
            </p>
          )}
        </InputBox>
        <InputBox>
          <label>
            비밀번호
            <span> *</span>
          </label>
          <input
            id="password"
            type="password"
            onBlur={(event) =>
              blurHandler(
                event.target.id,
                event.target.value,
                setPassword,
                validatePassword,
              )
            }
          ></input>
          {password.isWarn && (
            <p>
              비밀번호는 대문자, 소문자, 숫자, 특수문자 조합을 사용해 주세요.
            </p>
          )}
        </InputBox>
        <InputBox>
          <label>
            비밀번호 확인
            <span> *</span>
          </label>
          <input
            id="passwordConfirm"
            type="password"
            onBlur={(event) =>
              blurHandler(
                event.target.id,
                event.target.value,
                setPasswordConfirm,
                validatePasswordConfirm,
              )
            }
          ></input>
          {passwordConfirm.isWarn && <p>비밀번호가 일치하지 않습니다.</p>}
        </InputBox>
        <InputBox>
          <label>별명</label>
          <input
            id="nickName"
            type="text"
            onBlur={(event) =>
              blurHandler(
                event.target.id,
                event.target.value,
                setNickName,
                validateNickName,
              )
            }
          ></input>
          {nickName.isWarn && (
            <p style={{ color: '#00AFF4' }}>
              입력하지 않을경우 랜덤 별명이 발급 됩니다.
            </p>
          )}
        </InputBox>
        <Button buttonType="confirm">계속하기</Button>
      </form>
    </FormContainer>
  );
}

export default SignUp;
