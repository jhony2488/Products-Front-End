
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import { Button, Form, Row, Col } from 'react-bootstrap';

export interface Product {
    name: string;
    price: string;
    quantity: number;
    category: string;
}

export interface PropsProductsForm {
    onSubmit: (values: { products: Product[] }) => SubmitHandler<{ products: Product[] }>;
}

export const FormCreateProduct = ({ onSubmit }: PropsProductsForm) => {
    const { register, control, handleSubmit } = useForm<{ products: Product[] }>({
        defaultValues: {
            products: [{ name: '', price: "0", quantity: 0, category: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'products',
    });

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((item, index) => (
                <Row className="mb-3" key={item.id}>
                    <Col>
                        <Form.Group controlId={`productName${index}`}>
                            <Form.Label>Nome do Produto</Form.Label>
                            <Form.Control
                                type="text"
                                {...register(`products.${index}.name`, { required: true })}
                                placeholder="Digite o nome do produto"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId={`productPrice${index}`}>
                            <Form.Label>Preço</Form.Label>
                            <Form.Control
                                type="text"
                                {...register(`products.${index}.price`, { required: true, min: 0 })}
                                placeholder="Digite o preço do produto"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId={`productQuantity${index}`}>
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Control
                                type="number"
                                {...register(`products.${index}.quantity`, { required: true, min: 0 })}
                                placeholder="Digite a quantidade do produto"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId={`productQuantity${index}`}>
                            <Form.Label>Categoria</Form.Label>
                            <Form.Control
                                type="text"
                                {...register(`products.${index}.category`, { required: true, min: 0 })}
                                placeholder="Digite a quantidade do produto"
                            />
                        </Form.Group>
                    </Col>
                    <Col className="align-button-remove">
                        <Button variant="danger" onClick={() => remove(index)}>
                            Remover
                        </Button>
                    </Col>
                </Row>
            ))}
            <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center", marginTop: 24 }}>
                <Button variant="primary" onClick={() => append({ name: '', price: "0", quantity: 0, category: "" })}>
                    Adicionar Produto
                </Button>
                <Button type="submit" variant="success" >
                    Criar Produtos
                </Button>
            </div>
        </Form>
    );
};