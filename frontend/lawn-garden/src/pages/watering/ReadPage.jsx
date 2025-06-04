// 게시글 조회 페이지
import React from 'react'
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import BlockLabel from '@/styles/BlockLabel'
import PageHeader from '@/components/PageHeader'
import Container from '@/components/Container'
import ProofItem from '@/components/ProofItem'

const PhotoBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-background);
    border-radius: 1.5rem;
    padding: 1rem 1.25rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    gap: 1rem;
    height: 21vh;
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
    height: 15vh;
`;

export default function ReadPage() {
  return (
    <Wrapper>
        <PageHeader title="오늘의 잔디정원"/>
        <Container>
            {/* 나중에 넘겨받으면됨 */}
            <ProofItem date='2025.03.31' writer='나' />

            <BlockLabel>오늘의 활동 인증</BlockLabel>
            <PhotoBlock>
                이미지가 뿅
            </PhotoBlock>

            <BlockLabel>오늘의 한마디</BlockLabel>
            <Block2>
                한마디가 뿅
            </Block2>
        </Container>
    </Wrapper>
  )
}
