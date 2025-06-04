// laydown
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import PageHeader from '@/components/PageHeader'

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
    /* min-height: 505px; */
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

const UserList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto; 
  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

const UserItem = styled.li`
  background-color: white;
  padding: 10px 16px;
  border-radius: 999px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Icon = styled.span`
  font-size: 1.2rem;
`;

export default function CheckMember() {
    const certified = [
        '🌱 S2ej1n 🔥🪴',
        '🌱 hae01y',
        '🌱 1234',
        '🌱 e2ejwE',
        '🌱 EeedjseEfd',
        '🌱 AWDSFdjkfkas',
        '🌱 Googlegleglegle',
        '🌱 Googlegleglegle',
        '🌱 Googlegleglegle',
        '🌱 Googlegleglegle',
      ];
    
      const uncertified = [
        '❌ S2ej1n',
        '❌ helloworld',
        '❌ cnskfnadk',
        '❌ ZzzZzZ',
      ];

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
                    {name.replace('❌ ', '')}
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
                        {name.replace('🌱 ', '')}
                    </UserItem>
                    ))}
                </UserList>

            </Container>
        </BoxWrapper>
    </Wrapper>
  )
}
