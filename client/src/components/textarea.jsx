import Form from "react-bootstrap/Form";

export default function textarea() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Input Text Here</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
    </Form>
  );
}
