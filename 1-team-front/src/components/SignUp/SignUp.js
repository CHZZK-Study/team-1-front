import styled from 'styled-components'
import Input from './UI/Input'

const SignUpForm = styled.form`
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
`

const SignUpButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 2px;
  color: #fff;
  background-color: #5865f2;
`

function SignUp() {
  return (
    <SignUpForm>
      <h2>계정 만들기</h2>
      <Input text="이메일" type="text" warnning="이메일을 입력해 주세요." />
      <Input text="비밀번호" type="password" warnning="비밀번호는 대문자, 소문자, 숫자, 특수문자 조합을 사용해 주세요." />
      <Input text="비밀번호 확인" type="password" warnning="비밀번호가 일치하지 않습니다." />
      <Input text="별명" type="text" warnning="입력하지 않을경우 랜덤 별명이 발급 됩니다." />
      <SignUpButton type="submit">계속하기</SignUpButton>
    </SignUpForm>
  )
}

export default SignUp
