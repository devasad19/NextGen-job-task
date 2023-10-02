import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welecome from './welecome';
import About from './about';


export default function App() {
  return (
	<div>
		<Router>
		    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
		      <Container>
		        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
		        <Navbar.Toggle aria-controls="basic-navbar-nav" />
		        <Navbar.Collapse id="basic-navbar-nav">
		          <Nav className="me-auto">
		            <Link to="/ngssl/">Home</Link>
		            <Link to="/ngssl/about">About</Link>
		             
		          </Nav>
		        </Navbar.Collapse>
		      </Container>
		    </Navbar>
		    <Container>
		        <Routes>
		          <Route exact path="/ngssl/" element={<Welecome />}>
		            
		          </Route>
		          <Route path="/ngssl/about" element={<About />}>
		            
		          </Route>
		          
		        </Routes>
		    </Container>
	    </Router>
    </div>
  );
}

 

const root = ReactDOM.createRoot(document.getElementById('welecome'));
root.render(<App />);