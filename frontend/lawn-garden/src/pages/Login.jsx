import React from 'react'
import Logo from '@/assets/Logo.svg'
import { LogoStyle } from '@/styles/LogoStyle'
import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Login() {
  return (
    <Wrapper>
      <LogoStyle src={Logo} />
      <input/>
      <input/>
      <button>Login</button>
    </Wrapper>
  )
}
