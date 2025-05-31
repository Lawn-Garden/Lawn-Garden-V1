import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/Logo.svg'
import { LogoStyle } from '@/styles/LogoStyle'
import Wrapper from '@/styles/Wrapper'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { SignText, TextButton } from '@/components/SignText'

export default function Login() {
  const navigate = useNavigate();

  return (
    <Wrapper marginBottom>
      <LogoStyle src={Logo} />
      <Input placeholder='Email'/>
      <Input placeholder='PASSWORD'/>
      {/* 우선 메인 이동으로만 연결 */}
      <Button onClick={() => navigate('/main')}>Login</Button>

      <SignText color="#99BC85">회원이 아니신가요?
        <TextButton onClick={() => navigate('/join')}> 회원가입</TextButton>
      </SignText>
    </Wrapper>
  )
}
