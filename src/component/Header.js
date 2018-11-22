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
                <NavbarBrand onClick = {()=> this.props.ChangePage("Home")}><img src={Logo} height="64"></img></NavbarBrand>
                <NavbarBrand onClick = {()=> this.props.ChangePage("Home")}>Santren Koding</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink onClick = {()=> this.props.ChangePage("Kajian")}>Kajian Koding</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick = {()=> this.props.ChangePage("Mondok")}>Mondok Koding</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick = {()=> this.props.ChangePage("Kitab")}>Kitab Koding</NavLink>
                        </NavItem>
                        <Button outline color="primary">Masuk/Daftar</Button>{' '}
                    </Nav>
                </Navbar>            
            </div>
        )
    }
}
