import styled from 'styled-components';

const Search = styled.input`
    border: none;
    background-color: var(--color-background);
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 50px;
    color: var(--color-content-font);

    &:focus {
      outline: none;
    }
`

export default function SearchBar({placeholder = '검색'}) {
  return (
    <Search placeholder={placeholder}/>
  )
}
