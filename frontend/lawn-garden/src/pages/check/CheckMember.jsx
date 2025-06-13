// laydown
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import PageHeader from '@/components/PageHeader'
import CheckMemberBox from '@/components/CheckMemberBox';
import { certified, uncertified } from '@/data/proofData';

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
  return (
    <Wrapper>
        <PageHeader title="인증 내역 확인"/>
        <BoxWrapper>
            <CheckMemberBox
              title="금일 미인증자"
              description="오늘 잔디를 심지 않은 사람입니다! 혼날 준비 하세요!"
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
