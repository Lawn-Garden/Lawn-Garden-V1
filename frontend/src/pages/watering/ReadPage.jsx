// 게시글 조회 페이지
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import BlockLabel from '@/styles/BlockLabel'
import PageHeader from '@/components/PageHeader'
import Container from '@/styles/Container'
import ProofItem from '@/components/ProofItem'
import Loading from '@/components/Loading';

import { getPostById } from '@/api/post';

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
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
          try {
            const res = await getPostById(postId);
            setPost(res.data);
          } catch (err) {
            console.error('글 불러오기 실패:', err.response?.data || err.message);
          }
        };
    
        fetchPost();
      }, [postId]);

    if (!post) return <Loading />;

  return (
    <Wrapper>
        <PageHeader title="오늘의 잔디정원"/>
        <Container>
            {/* 나중에 넘겨받으면됨 */}
            <ProofItem 
                date={post.createdDate}
                writer={post.user.username} />

            <BlockLabel>오늘의 활동 인증</BlockLabel>
            <PhotoBlock>
                {post.base64Image ? (
                    <img
                    src={`data:image/png;base64,${post.base64Image}`}
                    alt="인증 이미지"
                    style={{ maxHeight: '100%', maxWidth: '100%', borderRadius: '10px' }}
                    />
                ) : (
                    <p>이미지가 없습니다</p>
                )}
            </PhotoBlock>

            <BlockLabel>오늘의 한마디</BlockLabel>
            <Block2>
                <p>{post.contents}</p>
            </Block2>
        </Container>
    </Wrapper>
  )
}
