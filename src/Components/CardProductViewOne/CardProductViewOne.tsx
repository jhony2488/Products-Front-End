import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { formatDate } from "../../utils/DateFormated";

export interface PropsProductsCard {
    name?: string;
    amount?: number;
    category?: string;
    price?: string;
    onReturn: () => void;
    created_at?: string | Date;
}

export function CardProductViewOne({ name, price, amount, category, created_at, onReturn }: PropsProductsCard) {
    return (
        <Card style={{ width: '80%' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Preço: {price}
                </Card.Text>
                <Card.Text>
                    Quantidade: {amount}
                </Card.Text>
                <Card.Text>
                    Quantidade: {category}
                </Card.Text>
                <Card.Text>
                    Data de criação: {formatDate(typeof created_at == "string" ? created_at : String(created_at))}
                </Card.Text>
                <Button variant="primary" onClick={() => onReturn()}>Retornar</Button>
            </Card.Body>
        </Card>
    );
}