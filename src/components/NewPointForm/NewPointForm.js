import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ButtonNewPoint} from './NewPointFormStyles.js'
import { Container } from 'react-bootstrap';

function NewPointForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className='p-5' style={{textAlign: 'center'}}>
      <h1>Não encontrou um ponto próximo à você?</h1>
      <ButtonNewPoint variant="primary" onClick={handleShow}>
        Solicitar ponto de coleta
      </ButtonNewPoint>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulário de solicitação para coleta de resíduos orgânicos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome completo"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="number"
                placeholder="(DDD) xxxx-xxxx"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Endereço de e-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="nome@exemplo.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Motivo da solicitação</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default NewPointForm;