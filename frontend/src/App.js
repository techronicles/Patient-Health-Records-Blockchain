// This is the main entry point for the React application.
import './App.css';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/index.js';

function userForm() {
  return (
    <div class="container">
      <Header />
      <h1 className="text-center mt-5">Patient Form</h1>
      <p className="text-center">Please Doctor fill out the form below:</p>

    <div class="container-fluid mt-5 justify-content-center w-50">

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Patient_Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Patient Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Patient_Age</Form.Label>
          <Form.Control type="number" placeholder="Enter Patient Age" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Patient_Diagnosis</Form.Label>
          <Form.Control type="text" placeholder="Enter Patient diagnosis" />
        </Form.Group>
         <Form.Group controlId="formBasicEmail">
          <Form.Label>Patient_Treatment</Form.Label>
          <Form.Control type="text" placeholder="Enter Patient treatment" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
    <Form.Label>Doctor_Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Doctor Name" />
  </Form.Group>
  
  <Button variant="primary" type="submit" className="mt-3 w-100">
    Submit patient Data
  </Button>
</Form>
    </div>
    </div>
  
  );
}

export default userForm;