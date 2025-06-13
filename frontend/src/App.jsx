import { Outlet } from 'react-router-dom'
import styled from 'styled-components';
import lawnLight from '@/assets/lawnLight.svg';
import lawnDark from '@/assets/lawnDark.svg';

const Wrapper = styled.div`
  position: relative;
  align-items: center;
  overflow: hidden;
  display: flex;
  justify-content: center;  
  align-items: center;     
  min-height: 100vh;         
`;

const BackgroundLayer = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none; // 마우스 이벤트 무시
  z-index: ${(props) => props.z || -1};
`;

function App() {

  return (
    <Wrapper>
      <BackgroundLayer src={lawnLight} alt="잔디 배경 연한층" z={-2} />
      <BackgroundLayer src={lawnDark} alt="잔디 배경 진한층" z={-1} />
      <Outlet />
    </Wrapper>
  )
}

export default App
