// 인증내역 아이템 하나하나 컴포넌트임
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    align-items: center;
    background: var(--color-background);
    border-radius: 1.5rem;
    padding: 1rem 1.25rem;
    font-weight: bold;
    box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    gap: 1rem;
    color: var(--color-content-font);
    cursor: pointer;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;

    .title {
        font-size: 1.2rem;
    }

    .writer {
        font-size: 0.9rem;
        font-weight: normal;
        color: var(--color-content-font);
    }
`

export default function ProofItem({date, writer}) {
  return (
    <Item>
        <p>🌱</p>
        <Info>
            <span className="date">{date}</span>
            <span className="writer">작성자: {writer}</span>
        </Info>
    </Item>
  );
}
