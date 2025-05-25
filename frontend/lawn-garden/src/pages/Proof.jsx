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
const SearchHeader = styled.header`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 1rem;
`

const Search = styled.input`
    border: none;
    background-color: var(--color-background);
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 50px;
    color: var(--color-content-font);

    &:focus {
      outline: none;
    }
`

const List = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    background: var(--color-background);
    border-radius: 1.5rem;
    padding: 1rem 1.25rem;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    gap: 1rem;
    color: var(--color-content-font);
    cursor: pointer;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;

    .title {
        font-size: 1.2rem;
    }

    .writer {
        font-size: 0.9rem;
        font-weight: normal;
        color: var(--color-content-font);
    }
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
    const dummyData = [
        { date: '2025.03.31', writer: 'S2eJ1n' },
        { date: '2025.03.31', writer: 'hae02y' },
        { date: '2025.03.31', writer: '1234' },
        { date: '2025.03.30', writer: 'S2eJ1n' },
        { date: '2025.03.30', writer: 'S2eJ1n' },
      ];

  return (
    <Wrapper>
        <PageHeader 
            title="오늘의 잔디정원"
            rightButton={<WriteButton >물주기</WriteButton>}/>

        <Container>
            <SearchHeader>
                <button>날짜검색</button>
                <Search placeholder='정원사 검색'/>
            </SearchHeader>
            
            <List>
                {dummyData.map((item, index) => (
                    <Item key={index}>
                    <p>🌱</p>
                    <Info>
                        <span className="title">{item.date}</span>
                        <span className="writer">작성자: {item.writer}</span>
                    </Info>
                    </Item>
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
