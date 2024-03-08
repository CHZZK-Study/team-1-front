/*eslint-disable*/
import { useState } from 'react';

import { CardContainer, FormWrapper, InputBox, Button } from '../AuthStyles';
import useAuthMutation from '../../../hooks/Auth/useAuthMutation';

const FindPassword = () => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const fetchFindPassword = useAuthMutation(
    'http://localhost:8080/member/password-reissue',
  );

  const emailInputChangeHandler = (value, setFn) => {
    setFn(value);
  };

  const findPasswordSubmitHandler = (event) => {
    event.preventDefault();
    fetchFindPassword.mutate(
      { email: email },
      {
        onSuccess: () => {
          setIsError(false);
          setIsSubmit(true);
        },
        onError: () => {
          setIsSubmit(false);
          setIsError(true);
        },
      },
    );
  };
  return (
    <CardContainer onSubmit={findPasswordSubmitHandler}>
      <h2>비밀번호를 잊으셨나요 ?</h2>
      <p>입력하신 이메일로 비밀번호 재설정 링크를 보내드립니다.</p>
      <FormWrapper>
        <InputBox isBlue={isSubmit}>
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
        <Button buttonType="confirm">확인</Button>
      </FormWrapper>
    </CardContainer>
  );
};

export default FindPassword;
