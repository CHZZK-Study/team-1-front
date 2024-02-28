/* eslint-disable */

import styled from 'styled-components';
import useAuthStore from '../../stores/Auth/auth';

const EmailConfirmWrapper = styled.div`
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
const KeepButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 2px;
  color: #fff;
  font-weight: 800;
  transition: all 0.3s linear;
  border: 0;
  background-color: #5865f2;
  &:hover {
    background-color: #4752c4;
  }
`;

const EmailConfirm = () => {
  const { setIsEmailConfirm, setIsLogIn } = useAuthStore();
  const clickHandler = () => {
    setIsEmailConfirm(false);
    setIsLogIn(true);
  };

  return (
    <EmailConfirmWrapper>
      <h2>Foxcord에 오신 걸 환영합니다 !</h2>
      <p>친구들과 Foxcord에서 함께 대화를 나눠보세요.</p>
      <KeepButton onClick={clickHandler}>계속하기</KeepButton>
    </EmailConfirmWrapper>
  );
};

export default EmailConfirm;
