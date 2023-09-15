import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';



function App() {
  return (
    <div className="App">
      <Nav variant="tabs" fill defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
      <h1>Bootstrap Website</h1>

      <Button variant='dark'>Dark</Button>
      <Button variant='light'>Link</Button>
      
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>select menu</Form.Label>
        <Form.Select>
          <option>Select Option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </Form.Select>
      </Form.Group>
      <Button variant="info" type="submit">
        Submit
      </Button>
    </Form>
     
    </div>
  );
}

export default App;
