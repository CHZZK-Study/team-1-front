import styled, { css } from 'styled-components';

const buttonType = {
  cancel: css`
    background-color: #2f3136;
    &:hover {
      background-color: #40444b;
    }
  `,
  confirm: css`
    background-color: #5865f2;
    &:hover {
      background-color: #4752c4;
    }
  `,
};

const CardContainer = styled.div`
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

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  & span {
    font-size: 0.8rem;
    color: #00aff4;
    cursor: pointer;
  }
  & span:hover {
    text-decoration-line: underline;
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
    color: ${(props) => (props.isSubmit ? '#00aff4' : '#ed4245')};
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 2px;
  color: #fff;
  font-weight: 800;
  transition: all 0.3s linear;
  border: 0;
  ${(props) => buttonType[props.buttonType]}
`;

const SpanButton = styled.span`
  & span {
    font-size: 0.8rem;
    color: #00aff4;
    cursor: pointer;
  }
  & span:hover {
    text-decoration-line: underline;
  }
`;

export { CardContainer, FormWrapper, InputBox, Button, SpanButton };
