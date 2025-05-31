import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
    background-color: #997C70;
    color: white;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 10px;
    transform: ${({angle}) => `rotate(${angle}deg)`};

    &:hover {
        background-color: #B89687;
    }

    /* 방향 별 모양 조정 */
    ${({direction}) => direction === 'left' && css`
        clip-path: polygon(0 50%, 20% 0, 100% 0, 100% 100%, 20% 100%);
        padding-left: 3rem;
    `}
    ${({direction}) => direction === 'right' && css`
        clip-path: polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%);
        padding-right: 3rem;
    `}
    ${({direction}) => direction === 'center' && css`
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    `}
`
export default function ArrowButton({direction, text, angle, onClick}) {
  return (
    <Button direction={direction} angle={angle} onClick={onClick}>
        {text}
    </Button>
  )
}
