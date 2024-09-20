// src/components/ProductForm.tsx
import React, { useState } from 'react';
import { FormCreateProduct, Product } from "../../Components/FormCreateProduct/FormCreateProduct";
import { useAppContext, AppContextData } from "../../providers/ContextApi";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../services/products";
import { Alert, Spinner } from 'react-bootstrap';

const CreateProduct: React.FC = () => {

  const { loading, setLoading }: AppContextData = useAppContext();

  const navigate = useNavigate();

  const [error, setError] = useState<{ message: string; isError: boolean; }>({ message: "", isError: false })

  const onCreateProduct = async (productValue: { products: Product[] }) => {
    setLoading(true);
    await productValue?.products?.map(async (item) => {
      await createProduct({
        categoria: item.category,
        preço: item.price,
        produto: item.name,
        quantidade: item.quantity
      }).catch(async (error) => {
        const errorData = await error?.response?.data;

        if (errorData.message) {
          setError({ message: errorData.message, isError: true });
          setLoading(true);
          return;
        }
        setLoading(false);
        setError({ message: "Erro desconhecido , tente novamente mais tarde", isError: true });
      });
    })

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 2500)
  };

  return <>
    {loading ? <div style={{ width: "100vw", height: "100vh", display: "grid", justifyItems: "center", alignItems: "center" }}>
      <Spinner animation="border" variant="primary" />
    </div> : <main>
      <h1>Criar novos produtos</h1>
      <section style={{ display: "flex", gap: 12 }}>
        <FormCreateProduct onSubmit={onCreateProduct} />
      </section>
    </main>}
  </>;
};

export default CreateProduct;