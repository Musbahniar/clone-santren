import React, { Component } from 'react'
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import Logo from '../img/santrenkoding_logo.png';

export default class Header extends Component {

    render() 
    {
        return (
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src={Logo} height="64"></img></NavbarBrand>
                <NavbarBrand href="/">Santren Koding</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Kajian Koding</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Mondok Koding</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Kitab Koding</NavLink>
                        </NavItem>
                        <Button outline color="primary">Masuk/Daftar</Button>{' '}
                    </Nav>
                </Navbar>            
            </div>
        )
    }
}
