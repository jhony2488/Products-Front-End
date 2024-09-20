import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { PropsProducts } from "../../interfaces/products";
import { useAppContext, AppContextData } from "../../providers/ContextApi";
import { schemaProduct } from "../../utils/Validations/products"

export interface PropsProductsForm {
    onSubmit: (values: PropsProducts) => void;
}

export function FormUpdatedProduct({ onSubmit }: PropsProductsForm) {
    const { product }: AppContextData = useAppContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: product,
        resolver: yupResolver(schemaProduct),
    })

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nome Produto</Form.Label>
                <Form.Control  {...register("produto")} type="text" placeholder="Produto 1" />
                {errors.produto?.message && <p style={{ marginTop: 8, color: "red", fontSize: 16 }}>{errors.produto?.message}</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Preço</Form.Label>
                <Form.Control {...register("preço")} type="number" placeholder="R$ 360,00" />
                {errors.preço?.message && <p style={{ marginTop: 8, color: "red", fontSize: 16 }}>{errors.preço?.message}</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Quantidade</Form.Label>
                <Form.Control {...register("quantidade")} type="number" placeholder="9" />
                {errors.quantidade?.message && <p style={{ marginTop: 8, color: "red", fontSize: 16 }}>{errors.quantidade?.message}</p>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Categoria</Form.Label>
                <Form.Control {...register("categoria")} type="text" placeholder="Categoria 1" />
                {errors.categoria?.message && <p style={{ marginTop: 8, color: "red", fontSize: 16 }}>{errors.categoria?.message}</p>}
            </Form.Group>
            <Button variant="success" type="submit">Editar Produto</Button>
        </Form>
    );
}