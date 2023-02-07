import styled from "styled-components";


export const HeaderContainer = styled.header`
  padding: 4;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  a {
    display: flex;
    align-items: center;
    gap: 1;
    align-items: center;
    text-decoration: none;
    font-weight: bold;

    p {
      margin-left: 0.5rem;
      color: ${props => props.theme['red-200']};
      font-size: 1rem
    }   
  } 
`

export const Hospedes = styled.div`
opacity: 0.5;
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 40px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  gap: 1rem;
  padding: 0.25rem 1rem;
  cursor: pointer;
`

export const SearchButton = styled.button`
  background-color: ${props => props.theme['red-200']};
  border-radius: 40px;
  cursor: pointer;
  padding: 2px 4px;
  border: none;
`

export const UserField = styled.div`
  display: flex;
  align-items: center;
  border-radius: 40px;
  border: 1px solid ${(props) => props.theme['gray-300']};
  gap: 1rem;
  padding: 0.25rem 1rem;
  cursor: pointer;
`

export const Separator = styled.div`
  border-left: 1px solid ${(props) => props.theme['gray-300']};
  height: 80%
  `
