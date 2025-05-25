// 물주기 목록 화면 watering
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import Container from '@/components/Container'
import PageHeader from '@/components/PageHeader'
import ProofItem from '@/components/ProofItem'
import SearchBar from '@/components/SearchBar'

import { proofData } from '@/data/proofData';

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

const SearchHeader = styled.header`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 1rem;
`

const List = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FooterPagination = styled.footer`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    span {
        width: 10px;
        height: 10px;
        background: #ccc;
        border-radius: 50%;

    &.active {
      background-color: #5e8f6e;
    }
  }
`

export default function Proof() {
  const navigate = useNavigate();

  return (
    <Wrapper>
        <PageHeader 
            title="오늘의 잔디정원"
            rightButton=
            {<WriteButton onClick={() => navigate('/watering/write')}
            >물주기</WriteButton>}/>

        <Container>
            <SearchHeader>
                {/* <button>날짜검색</button> */}
                <SearchBar placeholder='정원사 검색'/>
            </SearchHeader>
            
            <List>
            {proofData.map((item, index) => (
                <ProofItem key={index} date={item.date} writer={item.writer} 
                onClick={() => navigate('/watering/:id')}/>
            ))}
            </List>
        </Container>

        <FooterPagination>
            <span />
            <span />
            <span className="active" />
            <span />
            <span />
      </FooterPagination>

    </Wrapper>
  )
}
