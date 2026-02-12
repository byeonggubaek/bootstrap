"use client"
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col,
  Form,
  Button
} from "react-bootstrap"
import { Link } from "react-router-dom"
import type { NavItem } from 'shared';

interface WdogNaviProps {
  navItems: NavItem[];
}

export default function WdogNavi({ navItems }: WdogNaviProps) {
  return (
    <Navbar expand="lg" className="w-100 bg-body-tertiary m-0 p-1">
      <Container fluid >  
        <Navbar.Brand as={Link} to="/">
          <img src="/logo.svg" alt="Logo" style={{ height: '2rem' }} className="w-auto cursor-pointer"/>
        </Navbar.Brand>
        <div className="flex-grow-1 d-flex justify-content-center align-items-bottom">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-center">
            <Nav className="my-2 my-lg-0 h-100 d-flex justify-content-center gap-4">
              {navItems.map((item) => (
                <NavDropdown
                  key={item.id}
                  title={item.title}
                  id={`nav-dropdown-${item.id}`}
                >
                  <div className="dropdown-menu-custom" style={{ minWidth: '600px', width: '600px' }}>
                    <Row className="g-2">
                      {/* 상권분석 - 왼쪽 */}
                      <Col xs={6}>
                        <div className="ps-2 d-flex flex-column gap-1">
                          <img 
                          src={item.img}  
                          className="img-fluid mb-2 rounded" 
                          style={{ width: '300px', objectFit: 'cover' }}
                          />
                          <div className="x-small text-primary">{item.description} </div>
                        </div>
                      </Col>
                      {/* 지도 - 오른쪽 */}
                      <Col xs={6} >
                        <div className='pe-2 d-flex flex-column gap-3'> 
                          {item.sub_menus.map((sub) => (
                            <div key={sub.id} className="ps-2 hover-shadow">
                              <NavDropdown.Item href={sub.href} className="text-bold ps-0">{sub.title}</NavDropdown.Item>  
                              <div className="custom-bg4 text-muted x-small rounded p-2">{sub.description}</div>
                            </div>
                          ))}
                        </div>            
                      </Col>
                    </Row>
                  </div>
                </NavDropdown>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
        <Form className="d-flex ps-3">
          <Form.Control
            type="search"
            placeholder="키워드"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success" className="text-nowrap">검색</Button>
        </Form>        
      </Container>
    </Navbar>
  )
}