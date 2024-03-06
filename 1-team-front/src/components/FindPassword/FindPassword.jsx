/*eslint-disable*/

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
    color: #ed4245;
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
  return (
    <FindPasswordForm>
      <h2>비밀번호를 잊으셨나요 ?</h2>
      <p>입력하신 이메일로 비밀번호 재설정 링크를 보내드립니다.</p>
      <InputBox>
        <label>이메일</label>
        <input type="text"></input>
      </InputBox>
      <SubmitButton>확인</SubmitButton>
    </FindPasswordForm>
  );
};

export default FindPassword;
