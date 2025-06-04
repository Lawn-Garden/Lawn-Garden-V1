// 게시글 조회 페이지
import React from 'react'
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import PageHeader from '@/components/PageHeader'
import Container from '@/components/Container'
import ProofItem from '@/components/ProofItem'
import Button from '@/components/Button'

const BlockLabel = styled.h2`
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--color-content-font);
    text-align: start;
    margin-top: 1.3rem;
    margin-bottom: 0.5rem;
`;

const Block1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-background);
    border-radius: 1.5rem;
    padding: 1rem 1.25rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    gap: 1rem;
    height: 18vh;
`;

const Block2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-background);
    border-radius: 1.5rem;
    padding: 1rem 1.25rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    gap: 1rem;
`;

const CommentBox = styled.textarea`
    resize: none;
    width: 100%;
    border: none;
    padding: 1rem 1.2rem;
    background: var(--color-background);
    font-size: 1rem;
    color: var(--color-content-font);
    &:focus {
        outline: none;
    }
`
const WriteButton = styled.button`
    background-color: var(--color-light-green);
    border: none;
    color: var(--color-background);
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--color-deep-green);
    }
`

export default function WritePage() {
  return (
    <Wrapper>
        <PageHeader title="오늘의 잔디정원"/>
        <Container>
            {/* 나중에 넘겨받으면됨 */}
            <ProofItem date='2025.03.31' writer='나' />

            <BlockLabel>오늘의 활동 인증</BlockLabel>
            <Block1>
                <WriteButton>첨부하기</WriteButton>
            </Block1>

            <BlockLabel>오늘의 한마디</BlockLabel>
            <Block2>
                <CommentBox 
                placeholder={
                    '오늘의 한마디를 작성해주세요!\n오늘 공부한 내용이나 기분, 어떤한 내용이든 좋습니다 :)'
                  }/>
            </Block2>
            <Button $marginB="0px" $bgColor="#A3D1C6">글 작성하기</Button>
        </Container>
    </Wrapper>
  )
}
