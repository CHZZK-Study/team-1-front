/* eslint-disable */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuthStore from '../../../stores/Auth/auth';
import createRandomNickName from '../../../utils/createRandomNickName';
import useAuthMutation from '../../../hooks/Auth/useAuthMutation';
import { CardContainer, FormWrapper, InputBox, Button } from './AuthStyles';

const validateEmail = (value) => value.includes('@');
const validatePassword = (value) => {
  const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
  return check.test(value);
};
const validatePasswordConfirm = (confirmPassword, curentPassword) => {
  return confirmPassword === curentPassword;
};
const validateNickName = (value) => {
  return value.length !== 0;
};

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

  const fetchValidateEmail = useAuthMutation(
    'http://localhost:8080/signup/email-validation',
  );
  const fetchEmailAuth = useAuthMutation(
    'http://localhost:8080/signup/email-auth',
  );

  const submitHandler = (event) => {
    event.preventDefault();
    fetchValidateEmail.mutate(
      { email: email },
      {
        onSuccess: () => {
          setAuthForm({
            email: email.email,
            password: password.password,
            nickName:
              nickName.nickName.length > 0
                ? nickName.nickName
                : createRandomNickName(),
          });
          fetchEmailAuth.mutate({ email: email });
        },
        onError: () => {
          setEmail((prev) => {
            return { ...prev, isWarn: true };
          });
          setIsEmailDuplicated(true);
        },
      },
    );
  };

  const blurHandler = (id, value, setFn, validationFn, extraValue = null) => {
    if (validationFn(value, extraValue))
      return setFn({ [id]: value, isWarn: false });
    if (id === 'email') setIsEmailDuplicated(false);
    setFn((prev) => {
      return { ...prev, isWarn: true };
    });
  };

  return (
    <CardContainer onSubmit={submitHandler}>
      <h2>계정 만들기</h2>
      <FormWrapper>
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
                ? '이미 존재하거나 유효하지 않는 이메일 입니다.'
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
                password.password,
              )
            }
          ></input>
          {passwordConfirm.isWarn && <p>비밀번호가 일치하지 않습니다.</p>}
        </InputBox>
        <InputBox isBlue={true}>
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
          {nickName.isWarn && <p>입력하지 않을경우 랜덤 별명이 발급 됩니다.</p>}
        </InputBox>
        <Button buttonType="confirm">계속하기</Button>
      </FormWrapper>
    </CardContainer>
  );
}

export default SignUp;
