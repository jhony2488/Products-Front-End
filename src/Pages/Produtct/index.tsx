import React, { useEffect } from 'react';
import { useAppContext, AppContextData } from "../../providers/ContextApi";
import { CardProductViewOne } from "../../Components/CardProductViewOne/CardProductViewOne";
import { useNavigate } from "react-router-dom";

const Product: React.FC = () => {

    const { product }: AppContextData = useAppContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!product) {
            navigate("/");
        }
    }, [])

    console.log(product)

    return <>
        <main style={{ width: "100vw", display: "flex", flexDirection: "column", alignItems: "center" }} className='paddingTop'>
            <h1>Produto Selecionado</h1>
            <section style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center", marginTop: 24 }}>
                <CardProductViewOne amount={product?.quantidade} name={product?.produto} category={product?.categoria} created_at={product?.created_at} onReturn={() => navigate("/")} />
            </section>
        </main></>;
};

export default Product;