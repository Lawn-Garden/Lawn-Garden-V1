// 게시글 조회 페이지
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import BlockLabel from '@/styles/BlockLabel'
import PageHeader from '@/components/PageHeader'
import Container from '@/styles/Container'
import ProofItem from '@/components/ProofItem'
import Button from '@/components/Button'
import { createPost } from '@/api/post';
import { useNavigate } from 'react-router-dom';


const PhotoBlock = styled.div`
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
const PreviewImage = styled.img`
  max-width: 300px;
  height: 15vh;
  border-radius: 12px;
`;

export default function WritePage() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null); // ref로 버튼 연결
    const [previewUrl, setPreviewUrl] = useState(null); //사진 미리보기
    const [contents, setContents] = useState('');

    const today = new Date().toISOString().split('T')[0];

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader(); // base64 형태의 URL로 가져옴
        reader.onload = () => {
            setPreviewUrl(reader.result); // base64
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async () => {
        if (!previewUrl || !contents.trim()) {
          alert('이미지와 한마디는 필수로 입력해주세요!');
          return;
        }
        
        const formData = new FormData();
        formData.append('link', 'https://testlink.com'); // 문자열
        formData.append('contents', contents);           // 문자열
        formData.append('base64Image', previewUrl);  

        try {
        //   await createPost({
        //     link: 'https://testlink.com', //이게모지 일단 넣기
        //     contents,
        //     base64Image: previewUrl,
        //   });

            await createPost(formData)
            alert('물주기 글이 작성되었습니다!');
            navigate('/watering');
        } catch (err) {
          console.error('글 작성 실패:', err.response?.data || err.message);
          alert('글 작성 실패');
        }
      };

  return (
    <Wrapper>
        <PageHeader title="오늘의 잔디정원"/>
        <Container>
            <ProofItem date={today} writer='나' />

            <BlockLabel>오늘의 활동 인증</BlockLabel>
            <PhotoBlock>
                {!previewUrl && (
                    <WriteButton onClick={handleButtonClick}>첨부하기</WriteButton>
                )}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                />
                {previewUrl && <PreviewImage src={previewUrl} alt="선택한이미지" />}
            </PhotoBlock>

            <BlockLabel>오늘의 한마디</BlockLabel>
            <Block2>
                <CommentBox 
                value={contents}
                onChange={(e) => setContents(e.target.value)}
                placeholder={
                    '오늘의 한마디를 작성해주세요!\n오늘 공부한 내용이나 기분, 어떤한 내용이든 좋습니다 :)'
                  }/>
            </Block2>
            <Button $marginB="0px" $bgColor="#A3D1C6"  onClick={handleSubmit}>
                글 작성하기</Button>
        </Container>
    </Wrapper>
  )
}
