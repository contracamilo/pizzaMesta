import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../../Styles/colors';
import { Title } from '../../Styles/title';

const NavbarStyled = styled.div`
    background: ${pizzaRed};
    padding:10px;
    position:fixed;
    width:100%;
    top:0;
    z-index:9;
`

const Logo = styled(Title)`
    font-size:25px;
    color:white;
    text-shadow: 1px 1px 4px #380502;
    
`

function Navbar() {
    return (
        <NavbarStyled >
            <Logo>
                PizzaMesta <span role="img" aria-label="Pizza Slice">🍕</span>
            </Logo>
        </NavbarStyled>
    )
}

export default Navbar
