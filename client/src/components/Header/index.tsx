import { Airplane, List, MagnifyingGlass, UserCircle } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Guests, HeaderContainer, SearchBar, SearchButton, Separator, UserField } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Airbnc">
        <Airplane size={48} color={"#f5426f"} />
        <p>airbnc</p>
      </NavLink>
      <SearchBar>
        <div>Qualquer lugar</div>
        <Separator />
        <div>Qualquer semana</div>
        <Separator />
        <Guests>Hóspedes?</Guests>
        <SearchButton>
          <MagnifyingGlass size={20} color={"#ffffff"} weight={"bold"} />
        </SearchButton>
      </SearchBar>
      <UserField>
        <List size={28} color="#77767b" weight="fill" />
        <NavLink to="/login" title="User Login">
          <UserCircle size={32} color="#77767b" weight="fill" />
        </NavLink>
      </UserField>
    </HeaderContainer>
  )
}