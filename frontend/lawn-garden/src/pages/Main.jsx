import React from 'react'
import styled from 'styled-components'
import Wrapper from '@/styles/Wrapper'


const HeaderText = styled.header`
    color: #99BC85;
    span {
        color: #3D8D7A;
    }
`
export default function Main() {
  return (
    <Wrapper>
      <HeaderText>
        <h2>환영합니다<br />
        <span>아이디</span>님!</h2>
        <p>당신의 레벨: <span>잔디관리인</span></p>
      </HeaderText>
      <section>

      </section>
    </Wrapper>
  )
}
