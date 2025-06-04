import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Wrapper from '@/styles/Wrapper'
import ArrowButton from '@/components/ArrowButton'

const HeaderText = styled.header`
    color: var(--color-light-green);
    margin-bottom: 12vh;
    span {
        color: var(--color-deep-green);
    }
`
const SignsSection = styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    gap: 1.15rem;
    margin-top: 0.5rem;
`
const Pole = styled.div`
    width: 15px;
    background-color: #997C70;
    border-radius: 6px;
    position: absolute;
    left: 50%;
    top: -5vh;
    bottom: 0;
    height: 100vh;
`
export default function Main() {
    const navigate = useNavigate();
  return (
    <Wrapper marginBottom>
      <HeaderText>
        <h2>환영합니다<br />
        <span>아이디</span> 님!</h2>
        <p>당신의 레벨: <span>잔디관리인</span></p>
      </HeaderText>

      <SignsSection>
      <Pole />
        <ArrowButton direction='left' text='잔디에 물주기' angle={4}
        onClick={() => navigate('/watering')}/>
        <ArrowButton direction='right' text='인증 내역 확인' angle={-4}
        onClick={() => navigate('/laydown')}
        />
        <ArrowButton direction='left' text='잔디정원 참여자' angle={10}
        onClick={() => navigate('/farmer')}
        />
        <ArrowButton direction='right' text='내 정원 조회' angle={-10}
        onClick={() => navigate('/mygarden')}
        />
        <ArrowButton direction='center' text='로그아웃' angle={2}/>
      </SignsSection>
    </Wrapper>
  )
}
