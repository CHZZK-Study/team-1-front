/*eslint-disable*/

import axios from 'axios';
import { useState } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';

const FindPasswordForm = styled.form`
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
  & p {
    font-size: 0.9rem;
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
    font-weight: 600;
    color: ${(props) => (props.isSubmit ? '#00aff4' : '#ed4245')};
  }
`;
const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 2px;
  color: #fff;
  background-color: #5865f2;
  font-weight: 800;
`;

const FindPassword = () => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const fetchFindPassword = async (data) => {
    const url = 'http://localhost:8080/member/password-reissue';
    const payload = data;
    return await axios.post(url, payload);
  };

  const submitFindPassword = useMutation(fetchFindPassword, {
    onSuccess: () => {
      setIsError(false);
      setIsSubmit(true);
    },
    onError: () => {
      setIsSubmit(false);
      setIsError(true);
    },
  });

  const emailInputChangeHandler = (value, setFn) => {
    setFn(value);
  };

  const findPasswordSubmitHandler = (event) => {
    event.preventDefault();
    submitFindPassword.mutate({ email: email });
  };
  return (
    <FindPasswordForm onSubmit={findPasswordSubmitHandler}>
      <h2>비밀번호를 잊으셨나요 ?</h2>
      <p>입력하신 이메일로 비밀번호 재설정 링크를 보내드립니다.</p>
      <InputBox isSubmit={isSubmit}>
        <label>이메일</label>
        <input
          type="text"
          value={email}
          onChange={(event) =>
            emailInputChangeHandler(event.target.value, setEmail)
          }
        ></input>
        {isError && <p>이메일이 유효하지 않습니다.</p>}
        {isSubmit && (
          <p>입력하신 이메일로 비밀번호 재설정 링크를 보냈습니다.</p>
        )}
      </InputBox>
      <SubmitButton>확인</SubmitButton>
    </FindPasswordForm>
  );
};

export default FindPassword;
