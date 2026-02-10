"use client"
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Card
} from "react-bootstrap"
import { Link } from "react-router-dom"
import type { NavItem } from 'shared';

interface WdogNaviProps {
  navItems: NavItem[];
}

export default function WdogNavi({ navItems }: WdogNaviProps) {
  console.log('navItems:', navItems);
  
  return (
    <div className="w-full pt-6">
      <Navbar expand="lg" className="justify-content-center bg-light shadow-sm">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navItems.map((item) => (
                <NavDropdown
                  key={item.id}
                  title={
                    <span className="nav-link px-3 text-xl">
                      {item.title}
                    </span>
                  }
                  id={`nav-dropdown-${item.id}`}
                  className="mx-2"
                  menuVariant="light"
                >
                  {/* 메인 이미지 카드 */}
                  <NavDropdown.ItemText className="p-0">
                    <Card className="w-100 mb-3 border-0 bg-gradient">
                      <Link 
                        to={ "#"} 
                        className="text-decoration-none stretched-link"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <Card.Img 
                          src={item.img} 
                          alt={item.title} 
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body className="p-3">
                          <Card.Text className="text-primary small mb-0">
                            {item.description}
                          </Card.Text>
                        </Card.Body>
                      </Link>
                    </Card>
                  </NavDropdown.ItemText>

                  {/* 서브 메뉴 */}
                  {item.sub_menus.map((sub) => (
                    <NavDropdown.Item 
                      key={sub.id}
                      as={Link}
                      to={sub.href}
                      className="px-3 py-2"
                    >
                      <div>
                        <div className="fw-semibold text-primary">{sub.title}</div>
                        <div className="small text-muted">{sub.description}</div>
                      </div>
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}