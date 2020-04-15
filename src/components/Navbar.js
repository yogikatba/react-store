import React from 'react'
import {Link} from 'react-router-dom'
//import logo from '../logo.svg'
import i from '../i.png'
import i1 from '../i1.png'
import styled from 'styled-components'
import {ButtonContainer} from './Button';

export default function Navbar() {
    return (
        <NavWrapper className='navbar 
        navbar-expand-sm navbar-dark
        px-sm-5'>
            <Link to='/'>
                <img src={i1} alt='store'
                className='navbar-brand' />
            </Link>
            <ul className='navbar-nav align-items-center'>
                <li className='nav-item ml-5'>
                    <Link to='/' className='nav-link strong'>
                        Products
                    </Link>
                </li>
            </ul>
            <Link to='/cart' className='ml-auto'>
               <ButtonContainer>
                   <span className='mr-2'>
                   <i className='fas fa-cart-plus'/>
                   </span>
                   My cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
    )
}

const NavWrapper=styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    front-size:1.3rem;
    text-transform: capitalize;
}
`;