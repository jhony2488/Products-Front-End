import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export interface PropsProductsCard {
    name: string;
    amount: number;
    category: string;
    price: string;
    onViewOne: () => void;
    onExclude: () => void;
    onEdit: () => void;
}

export function CardProduct({ name, price, amount, category, onViewOne, onExclude, onEdit }: PropsProductsCard) {
    return (
        <Card style={{ width: '300px', paddingBottom: 16, paddingTop: 8}}>
            <Card.Body style={{ width: '100%', display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Preço: {price}
                </Card.Text>
                <Card.Text>
                    Quantidade: {amount}
                </Card.Text>
                <Card.Text>
                    Categoria: {category}
                </Card.Text>
                <div style={{display: "flex", gap: 12, justifyContent: "center", marginBottom: 12}}>
                    <Button variant="success" onClick={() => onEdit()}>Editar</Button>
                    <Button variant="danger" onClick={() => onExclude()}>Excluir</Button>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Button style={{width: "200px"}} variant="primary" onClick={() => onViewOne()}>Ver Mais</Button>
                </div>
            </Card.Body>
        </Card>
    );
}