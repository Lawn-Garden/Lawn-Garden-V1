import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/Logo.svg'
import { LogoStyle } from '@/styles/LogoStyle'
import Wrapper from '@/styles/Wrapper'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { SignText, TextButton } from '@/components/SignText'

export default function Join() {
  const navigate = useNavigate();

  return (
    <Wrapper marginBottom>
        <LogoStyle src={Logo} />
        <Input placeholder='Email'/>
        <Input placeholder='Github ID'/>
        <Input placeholder='PASSWORD'/>
        <Button>SignUP</Button>
        <SignText color="#99BC85">이미 회원이신가요? 
          <TextButton onClick={() => navigate('/')}> 로그인</TextButton>
        </SignText>
      </Wrapper>
  )
}
