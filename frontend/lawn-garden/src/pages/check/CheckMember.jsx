// laydown
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import PageHeader from '@/components/PageHeader'
import { UserList, UserItem, Icon } from '@/styles/UserList';
import { certified, uncertified } from '@/data/proofData';

const BoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 0rem;
        margin-bottom: 2rem;
  }
`;

const Container = styled.section`
    background-color: var(--color-container-background);
    flex: 1; 
    width: 50vh;
    border-radius: 30px;
    padding: 1.2rem 1.2rem 1.2rem 1.2rem;
    margin-top: 1rem;
    @media (max-width: 768px) {
        width: 60vh;
  }
`

const BoxTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--color-content-font);
`;

const SubText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 16px;
`;

export default function CheckMember() {
  return (
    <Wrapper>
        <PageHeader title="인증 내역 확인"/>
        <BoxWrapper>
            <Container>
            <BoxTitle>금일 미인증자</BoxTitle>
            <SubText>오늘 잔디를 심지 않은 사람입니다! 혼날 준비 하세요!</SubText>
            <UserList>
                {uncertified.map((name, i) => (
                <UserItem key={i}>
                    <Icon>❌</Icon>
                    {name}
                </UserItem>
                ))}
            </UserList>
            </Container>

            <Container>
              <BoxTitle>금일 인증자</BoxTitle>
                <SubText>오늘 잔디를 심었어요!</SubText>
                <UserList>
                    {certified.map((name, i) => (
                    <UserItem key={i}>
                        <Icon>🌱</Icon>
                        {name}
                    </UserItem>
                    ))}
                </UserList>
            </Container>
        </BoxWrapper>
    </Wrapper>
  )
}
