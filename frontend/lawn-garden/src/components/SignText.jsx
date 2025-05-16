import styled from 'styled-components';

export const SignText = styled.p`
    font-size: 14px;
    color: ${(props) => props.color || '#888'};
`;

export const TextButton = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: #3D8D7A;
    cursor: pointer;
`;