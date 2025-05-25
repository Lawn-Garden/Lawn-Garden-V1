import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: #997C70;
`
export default function ArrowButton({text}) {
  return (
    <Button>
        {text}
    </Button>
  )
}
