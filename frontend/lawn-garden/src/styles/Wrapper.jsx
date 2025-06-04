// 로그인 및 회원가입 가운데 정렬

// import styled from 'styled-components';

// const Wrapper = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   ${({ marginBottom }) => marginBottom && `margin-bottom: 9vh;`}
// `

// export default Wrapper;

// 애니메이션 추가
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnimatedWrapper = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${({ marginBottom }) => marginBottom && `margin-bottom: 9vh;`}
`;

export const wrapperVariants = {
  initial: {
    opacity: 0,
    x: -60,        // ⬇️ 아래에서
    // scale: 0.98,  // 살짝 작게
  },
  animate: {
    opacity: 1,
    x: 0,         // 제자리
    scale: 1,
    transition: {
      duration: 0.8,         // 천천히
      ease: 'easeOut',     // 일정한 부드러움
    },
  },
  exit: {
    opacity: 0,
    x: 30,       // 위로 사라지게
    scale: 0.96,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export default function Wrapper({ children, marginBottom }) {
  return (
    <AnimatedWrapper
      marginBottom={marginBottom}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={wrapperVariants}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {children}
    </AnimatedWrapper>
  );
}
