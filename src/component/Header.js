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
import {Link} from 'react-router-dom';

export default class Header extends Component {

    render() 
    {
        return (
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/" ><img src={Logo} height="64"></img></NavbarBrand>
                <NavbarBrand href="/" >Santren Koding</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to ="/kajian"><NavLink>Kajian Koding</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link to ="/mondok"><NavLink>Mondok Koding</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link to ="/kitab"><NavLink>Kitab Koding</NavLink></Link>
                        </NavItem>
                        <Button outline color="primary">Masuk/Daftar</Button>{' '}
                    </Nav>
                </Navbar>            
            </div>
        )
    }
}
