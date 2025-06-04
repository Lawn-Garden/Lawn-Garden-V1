// 잔디정원 참여자 조회 farmer
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import PageHeader from '@/components/PageHeader'
import Container from '@/components/Container'
import SearchBar from '@/components/SearchBar'

const SearchHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 0.7rem; */
    margin-bottom: 1rem;
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

const Filter = styled.button`
  background-color: #f5e0c9;
  border: none;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  margin-right: 0.2rem;
`;

const BoxText = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  color: var(--color-content-font);
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ListItem = styled.li`
  background-color: white;
  border-radius: 999px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
`;

const Sprout = styled.span`
  font-size: 1.2rem;
`;

const Count = styled.span`
  font-weight: bold;
  color: #ff5f5f;
`;

export default function Participant() {

    const participants = [
        { name: 'S2ej1n 🔥🪴', count: 3 },
        { name: 'hae01y', count: 5 },
        { name: 'e2ejwE', count: 2 },
        { name: 'icecreaammmm', count: 4 },
        { name: 'EeedjseEfd', count: 0 },
        { name: 'AWDSFdjkfkas', count: 0 },
        { name: 'Googlegleglegle', count: 5 },
    ];

  return (
     <Wrapper>
        <PageHeader title="잔디정원 참여자"/>
            <Container>
                <BoxText>
                    정원사들과 이번주 제출 현황을 확인할 수 있어요!
                </BoxText>
                <SearchHeader>
                    <div>
                    <Filter>이름순</Filter>
                    <Filter>레벨순</Filter>
                    </div>
                    <SearchBar placeholder='정원사 검색'/>
                </SearchHeader>
                
                <List>
                    {participants.map((user, i) => (
                    <ListItem key={i}>
                        <Left>
                        <Sprout>🌱</Sprout> {user.name}
                        </Left>
                        <Count>{user.count}</Count>
                    </ListItem>
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
