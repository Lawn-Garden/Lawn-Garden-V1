import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #3E8D7A;

  --_m: 
    conic-gradient(#0000 10%, #000),
    linear-gradient(#000 0 0) content-box;

  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;

  animation: spin 1s infinite linear;

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default function Loading() {
  return <Loader />;
}
