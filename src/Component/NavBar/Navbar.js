import React from 'react'
import {Button, Container, Form, Nav, NavDropdown, Navbar} from 'react-bootstrap'
import logoimg from '../../imgas/logos.png'
import userimg from '../../imgas/user.png'
import cartimg from '../../imgas/cart.png'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../Context/ShoppingCartContacxt'

const NavbarComp = () => {
  const {OpenCart, CartQuantity,} = useShoppingCart()

  return (
    <Navbar expand="lg" className="bg-body-tertiary navs" >
    <Container fluid >
      <Navbar.Brand >
        <NavLink to='/'>
            <img src={logoimg} alt='logo-img' style={{width:'3rem', height:'3rem'}}/>
        </NavLink>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="بحث"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <Nav
          className="me-auto my-2 my-lg-0 navs-listss"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {/* <NavDropdown title="الكل" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
            {/* start nav link */}

            <Nav.Link className='navs-lists' to='/' as={NavLink}>الكل</Nav.Link>
            <Nav.Link className='navs-lists' to='/allCardComputer' as={NavLink}>الاكترونيات</Nav.Link>
            <Nav.Link className='navs-lists' to='/allCardMopail' as={NavLink}>موبيلات</Nav.Link>
            <Nav.Link className='navs-lists' to='/allCardAxss' as={NavLink}>اكسسوار</Nav.Link>
            <Nav.Link className='navs-lists' to='/allCardDash' as={NavLink} >شــاشــات</Nav.Link>
            <Nav.Link className='navs-lists' to='/allCardDap' as={NavLink} >اجهزه كهربائيه</Nav.Link>
            <Nav.Link className='navs-lists' to='/allCardMatbkh' as={NavLink}>ادوات منزليه</Nav.Link>
            <Nav.Link className='navs-lists' to='/allCardroom' as={NavLink}>غرف نوم</Nav.Link>

            {/*end nav link */}
          
        </Nav>
 
 <span>
  <NavLink to='/login'>
         <img src={userimg} alt='logo-img' style={{width:'3rem', height:'3rem'}}/>
  </NavLink>
 </span>


 <Button variant='outline-primary' className='rounded-circle' style={{position: 'relative'}} onClick={OpenCart}>
                <img className='cart-img' src={cartimg} style={{width:'2rem', height:'2rems'}}/>
                <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' 
                style={{position:'absolute' , color:'white', width:'1.5rem', height:'1.5rem', bottom:0, right:0,}}>
                   {CartQuantity}
                </div>
            </Button>


       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComp