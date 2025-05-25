import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import backButton from '@/assets/backButton.svg'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    white-space: nowrap;

    h1 {
        font-size: 1.8rem;
        font-weight: bold;
        color: var(--color-deep-green);
    }
`
const BackButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
    }

    &:hover{
        transform: scale(1.1);
    }
`

export default function PageHeader({title, rightButton}) {
    const navigate = useNavigate();

  return (
    <Header>
        <BackButton aria-label="뒤로가기">
            <img src={backButton} alt="뒤로가기"
            onClick={()=>navigate(-1)} />
        </BackButton>
        <h1>{title}</h1>
        {rightButton ?? <></>}
    </Header>
  )
}
