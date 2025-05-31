import styled from 'styled-components';
import searchIcon from '@/assets/Search.svg'

const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Search = styled.input`
    border: none;
    background-color: var(--color-background);
    padding: 0.5rem 2.5rem 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 50px;
    color: var(--color-content-font);
    width: 100%;

    &:focus {
      outline: none;
    }
`
const Icon = styled.img`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    pointer-events: none;
`

export default function SearchBar({placeholder = '검색'}) {
  return (
    <SearchWrapper>
      <Search placeholder={placeholder}/>
      <Icon src={searchIcon} alt="Search" />
    </SearchWrapper>
  )
}
