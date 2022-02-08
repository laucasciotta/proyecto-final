import { Button, Form, InputGroup, Modal, Spinner } from "react-bootstrap";

export default function ModalEditBebida(props) {
    const { isModal, onClose, onSubmit, nombre, imagen, handleChange, isLoading } = props;

    return (
        <Modal show={isModal} onHide={onClose}>
                <Form onSubmit={onSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Birra</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-5">
                        <Form.Group controlId="nombre">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control
                                name="nombre"
                                value={nombre}
                                onChange={handleChange}
                                required
                                type="text"
                                placeholder="Bebida"
                            />
                        </Form.Group>
                        <Form.Group controlId="imagen">
                            <Form.Label>Imagen</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    name="imagen"
                                    value={imagen}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="http://bebida.jpg"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="button" variant="secondary" onClick={onClose}>
                            Cerrar
                        </Button>
                        <Button type="submit" className="" disabled={isLoading}>
                            Guardar Cambios
                            {isLoading && (
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            )}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
    )
}
