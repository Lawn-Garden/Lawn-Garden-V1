import React from 'react';
import styled from 'styled-components';
import { UserList, UserItem, Icon } from '@/styles/UserList';

const Container = styled.section`
  background-color: var(--color-container-background);
  flex: 1;
  width: 50vh;
  border-radius: 30px;
  padding: 1.2rem;

  @media (max-width: 768px) {
    width: 40vh;
  }
`;

const BoxTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--color-content-font);
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SubText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default function CheckMemberBox({ title, description, icon, list }) {
  return (
    <Container>
      <BoxTitle>{title}</BoxTitle>
      <SubText>{description}</SubText>
      <UserList>
        {list.map((name, i) => (
          <UserItem key={i}>
            <Icon>{icon}</Icon>
            {name}
          </UserItem>
        ))}
      </UserList>
    </Container>
  );
}
