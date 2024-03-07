/* eslint-disable */

import styled from 'styled-components';

import { FormContainer, Button } from './AuthStyles';
import { useNavigate } from 'react-router-dom';

const EmailConfirm = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/auth/login');
  };

  return (
    <FormContainer>
      <h2>Foxcord에 오신 걸 환영합니다 !</h2>
      <p>친구들과 Foxcord에서 함께 대화를 나눠보세요.</p>
      <Button buttonType="confirm" onClick={clickHandler}>
        계속하기
      </Button>
    </FormContainer>
  );
};

export default EmailConfirm;
