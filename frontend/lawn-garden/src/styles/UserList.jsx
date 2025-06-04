import styled from 'styled-components';

export const UserList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
  
  /* 스크롤바 전체 영역 */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-background);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

`;

export const UserItem = styled.li`
  background-color: var(--color-background);
  padding: 10px 16px;
  border-radius: 999px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const UserInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 8px;
  font-weight: 600;
`;

export const Icon = styled.span`
  font-size: 1.2rem;
`;

export const Count = styled.span`
  font-weight: bold;
  color: #ff5f5f;
`;
