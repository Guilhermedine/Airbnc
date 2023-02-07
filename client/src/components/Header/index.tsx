import { Airplane, List, MagnifyingGlass, UserSquare } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, Hospedes, SearchBar, SearchButton, Separator, UserField } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Airbnc">
        <Airplane size={40} color={"#f5426f"} />
        <p>airbnc</p>
      </NavLink>
      <SearchBar>
        <div>Qualquer lugar</div>
        <Separator />
        <div>Qualquer semana</div>
        <Separator />
        <Hospedes>Hóspedes?</Hospedes>
        <SearchButton>
          <MagnifyingGlass size={20} color={"#ffffff"} weight={"bold"} />
        </SearchButton>
      </SearchBar>
      <UserField>
        <List size={28} color="#77767b" weight="fill" />
        <UserSquare size={32} color="#77767b" weight="fill" />
      </UserField>
    </HeaderContainer>
  )
}