import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #997C70;
    color: white;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;

    &:hover {
        background-color: #B89687;
    }
`
export default function ArrowButton({direction, text}) {
  return (
    <Button direction={direction}>
        {text}
    </Button>
  )
}
