import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const AuthContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #202225;
`;

function Auth() {
  return (
    <AuthContainer>
      <Outlet />
    </AuthContainer>
  );
}

export default Auth;
