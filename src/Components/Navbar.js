import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { PropTypes } from 'prop-types';
function Navbar1(props) {
  return (
    <div className='App' style={{color:props.mode==='light'?'black':'white'}}>
      {/* <div className='navbar-container '> */}
        <Navbar className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`} >
          <Container fluid>
            <Navbar.Brand href="#" style={{color:props.mode==='light'?'black':'white'}}>{props.title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1" style={{color:props.mode==='light'?'black':'white'}}>Home</Nav.Link>
                <Nav.Link href="#action2" style={{color:props.mode==='light'?'black':'white'}}>{props.link}</Nav.Link>              
                <Nav.Link href="#" style={{color:props.mode==='light'?'black':'white'}}>
                  Link
                </Nav.Link>
              </Nav>
              
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    onClick={props.toggleMode}
                    label="Enable darkMode"
                  />
                </form>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      {/* </div> */}
    </div>
  );
}
// Navbar.propTypes= {title: PropTypes.string.isRequired,
//                   link:PropTypes.string.isRequired,
//                   Action:PropTypes.string.isRequired}
export default Navbar1