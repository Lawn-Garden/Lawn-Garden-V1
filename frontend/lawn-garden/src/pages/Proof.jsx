// 물주기 목록 화면 watering
import React from 'react'
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'

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
      <PageHeader 
        title="오늘의 잔디정원"
        rightButton={<WriteButton >물주기</WriteButton>}/>

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
