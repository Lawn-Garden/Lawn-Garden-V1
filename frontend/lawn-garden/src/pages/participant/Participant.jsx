// 잔디정원 참여자 조회 farmer
import styled from 'styled-components';
import Wrapper from '@/styles/Wrapper'
import PageHeader from '@/components/PageHeader'
import Container from '@/components/Container'
import SearchBar from '@/components/SearchBar'
import { FooterPagination } from '@/styles/FooterPagination';
import { UserList, UserItem, UserInfoRow, Icon, Count,} from '@/styles/UserList';
import { participants } from '@/data/proofData';

const SearchHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 0.7rem; */
    margin-bottom: 1rem;
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

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
`;


export default function Participant() {
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
                
                <UserList>
                    {participants.map((user, i) => (
                    <UserItem key={i}>
                      <UserInfoRow>
                        <Left>
                          <Icon>🌱</Icon> {user.name}
                        </Left>
                        <Count>{user.count}</Count>
                      </UserInfoRow>
                    </UserItem>
                    ))}
                </UserList>

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
