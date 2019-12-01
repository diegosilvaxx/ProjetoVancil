import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

<>
  <Accordion defaultActiveKey="0">
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        Endereço
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <h1>Accordion Teste</h1>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>

  <Accordion defaultActiveKey="0">
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="1">
        Pessoas de contato
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
          <h1>Accordion Teste</h1>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
</>;
