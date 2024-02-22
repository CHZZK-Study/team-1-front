import styled from 'styled-components'

const InputWrapper = styled.div`
  width: 360px;
  & h6 {
    color: #b9bbbe;
    font-weight: 900;
  }
  & input {
    width: 95%;
    height: 30px;
    background-color: #18191c;
    border-radius: 2px;
    margin: 7px 0;
    color: #fff;
    padding: 5px 10px;
    font-size: 0.9rem;
  }
  & p {
    font-size: 0.8rem;
    color: #fff;
  }
`

function Input({ text, type, warnning }) {
  return (
    <InputWrapper>
      <h6>{text}</h6>
      <input type={type} />
      <p>{warnning}</p>
    </InputWrapper>
  )
}

export default Input
