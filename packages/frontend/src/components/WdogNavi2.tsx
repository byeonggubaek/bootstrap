import { Navbar, Container, Nav, NavDropdown, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function WdogNavi2() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/"><img src="/logo.svg" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 h-100" navbarScroll>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <div className="dropdown-menu-custom" style={{ minWidth: '500px', width: '500px' }}>
                <Row className="g-2">
                {/* 상권분석 - 왼쪽 */}
                <Col xs={6}>
                  <div className="ps-2 hover-shadow">
                    <img 
                    src="/market.jpg" 
                    className="img-fluid mb-2 rounded" 
                    style={{ height: '140px', objectFit: 'cover' }}
                    />
                    <div className="x-small text-primary">예비 창업자의 성공적인 창업을 위해 빅데이터 기반의 분석 서비스를 제공합니다.</div>
                  </div>
                </Col>
                {/* 지도 - 오른쪽 */}
                <Col xs={6} >
                  <div className='pb-2 d-flex flex-column gap-3'> 
                    <div className="ps-2 bg-gray hover-shadow">
                      <NavDropdown.Item href="/market/simple" className="text-bold text-primary ps-0">간단분석</NavDropdown.Item>  
                      <div className="text-muted x-small">BigData를 이용하여 상권을 분석하여 간단하게 보여준다.</div>
                    </div>
                    <div className="ps-2 bg-gray hover-shadow">
                      <NavDropdown.Item href="/market/detail" className="text-bold text-primary ps-0">상세분석</NavDropdown.Item>  
                      <div className="text-muted x-small">BigData를 이용하여 상권을 분석하여 자세하게 보여준다.</div>
                    </div>      
                  </div>            
                </Col>
                </Row>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
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
  );
}

export default WdogNavi2;