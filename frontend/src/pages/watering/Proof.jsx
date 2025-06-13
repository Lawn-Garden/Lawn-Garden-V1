// 물주기 목록 화면 watering
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import Container from '@/styles/Container'
import PageHeader from '@/components/PageHeader'
import ProofItem from '@/components/ProofItem'
import SearchBar from '@/components/SearchBar'
import { FooterPagination } from '@/styles/FooterPagination';

// 연결맨~
import { getPosts } from '@/api/post';

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

export default function Proof() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const POSTS_PER_PAGE = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts({ page: currentPage, size: POSTS_PER_PAGE });
        setPosts(res.data.content);
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error('물주기 목록 조회 실패:', err.response?.data || err.message);
      }
    };

    fetchPosts();
  }, [currentPage]);

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
                {posts.map((item) => (
                    <ProofItem
                    key={item.id}
                    date={item.createdDate}
                    writer={item.user.username}
                    onClick={() => navigate(`/watering/${item.id}`)}
                    />
                ))}
            </List>
        </Container>

        <FooterPagination>
            {Array.from({ length: totalPages }).map((_, i) => (
            <span
                key={i}
                className={i === currentPage ? 'active' : ''}
                onClick={() => {
                setCurrentPage(i);
                window.scrollTo(0, 0);
                }}
            />
            ))}
      </FooterPagination>

    </Wrapper>
  )
}
