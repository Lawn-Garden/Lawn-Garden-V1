// 물주기 목록 화면 watering
import React from 'react'
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import Container from '@/components/Container'
import backButton from '@/assets/backButton.svg'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    gap: 1rem;

    h1 {
        font-size: 1.8rem;
        font-weight: bold;
        color: var(--color-deep-green);
    }
`
const BackButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
    }

    &:hover{
        transform: scale(1.1);
    }
`
const WriteButton = styled.button`
    background-color: var(--color-light-green);
    border: none;
    color: var(--color-background);
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.3rem 0.5rem;
    border-radius: 15px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--color-deep-green);
    }
`

export default function Proof() {
  return (
    <Wrapper>
      <Header>
        <BackButton aria-label="뒤로가기">
            <img src={backButton} alt="뒤로가기" />
        </BackButton>
        <h1>오늘의 잔디정원</h1>
        <WriteButton >물주기</WriteButton>
      </Header>

      <Container>

        <header>
            <button>날짜검색</button>
            <input placeholder='검색창'/>
        </header>
        
        <article>
            여기에 요소들 5개
        </article>

        <footer>
            페이지네이션버튼
        </footer>

      </Container>
    </Wrapper>
  )
}
