// laydown
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import PageHeader from '@/components/PageHeader'
import CheckMemberBox from '@/components/CheckMemberBox';
import { certified, uncertified } from '@/data/proofData';
import { getTodayUsers } from '@/api/user';

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
  }
`;

export default function CheckMember() {
  const [certified, setCertified] = useState([]);
  const [uncertified, setUncertified] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const [certifiedRes, uncertifiedRes] = await Promise.all([
          getTodayUsers('y'),
          getTodayUsers('n'),
        ]);
        setCertified(certifiedRes.data);
        setUncertified(uncertifiedRes.data);
      } catch (err) {
        console.error('인증/미인증자 조회 실패:', err.response?.data || err.message);
      }
    };

    fetchUsers();
  }, []);
  
  return (
    <Wrapper>
        <PageHeader title="인증 내역 확인"/>
        <BoxWrapper>
            <CheckMemberBox
              title="금일 미인증자"
              description="오늘 잔디를 심지 않은 사람입니다!"
              icon="❌"
              list={uncertified}
            />
            <CheckMemberBox
              title="금일 인증자"
              description="오늘 잔디를 심었어요!"
              icon="🌱"
              list={certified}
            />
        </BoxWrapper>
    </Wrapper>
  )
}
