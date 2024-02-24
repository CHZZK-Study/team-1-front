/* eslint-disable */
import styled from 'styled-components';

const LogInForm = styled.form`
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
  & span {
    font-size: 0.8rem;
    color: #00aff4;
    cursor: pointer;
  }
  & span:hover {
    text-decoration-line: underline;
  }
`;

const LogInButton = styled.button`
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

const FooterBox = styled.div`
  display: flex;
  gap: 8px;
  & p {
    font-size: 0.8rem;
  }
`;

const LogIn = () => {
  return (
    <LogInForm>
      <h2>환영합니다 !</h2>
      <InputBox>
        <label htmlFor="email">
          이메일
          <span> *</span>
        </label>
        <input id="email" type="text"></input>
      </InputBox>
      <InputBox>
        <label htmlFor="password">
          비밀번호
          <span> *</span>
        </label>
        <input id="password" type="password"></input>
        <span>비밀번호를 잊으셨나요 ?</span>
      </InputBox>
      <LogInButton type="submit">로그인</LogInButton>
      <FooterBox>
        <p>계정이 필요한가요 ?</p>
        <span>가입하기</span>
      </FooterBox>
    </LogInForm>
  );
};

export default LogIn;
