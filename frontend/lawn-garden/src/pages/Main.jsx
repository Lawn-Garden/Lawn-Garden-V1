import React from 'react'
import styled from 'styled-components'
import Wrapper from '@/styles/Wrapper'
import ArrowButton from '@/components/ArrowButton'

const HeaderText = styled.header`
    color: #99BC85;
    span {
        color: #3D8D7A;
    }
`
const SignsSection = styled.section`
    margin-top: 3vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default function Main() {
  return (
    <Wrapper>
      <HeaderText>
        <h2>환영합니다<br />
        <span>아이디</span>님!</h2>
        <p>당신의 레벨: <span>잔디관리인</span></p>
      </HeaderText>

      <SignsSection>
        <ArrowButton text='잔디에 물주기'/>
        <ArrowButton text='인증 내역 확인'/>
        <ArrowButton text='잔디정원 참여자'/>
        <ArrowButton text='내 정원 조회'/>
        <ArrowButton text='로그아웃'/>
      </SignsSection>
    </Wrapper>
  )
}
