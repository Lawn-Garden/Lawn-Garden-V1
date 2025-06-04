import styled from 'styled-components';

export const FooterPagination = styled.footer`
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