import React, { useState } from 'react';
import { useAppContext, AppContextData } from "../../providers/ContextApi";
import { useNavigate } from "react-router-dom";
import { updateProduct } from "../../services/products";
import { FormUpdatedProduct } from "../../Components/FormUpdatedProduct/FormUpdatedProduct"
import { PropsProducts } from "../../interfaces/products";
import { Alert, Spinner } from 'react-bootstrap';

const UpdatedProduct: React.FC = () => {

  const { setProduct, loading, setLoading, product }: AppContextData = useAppContext();

  const navigate = useNavigate();

  const [error, setError] = useState<{ message: string; isError: boolean; }>({ message: "", isError: false })

  const onEditProduct = async (productValue: PropsProducts) => {
    setLoading(true);
    await updateProduct(productValue, product?.id || 0).then(() => {
      setLoading(false);
      setProduct(null);
      navigate("/");
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
    setLoading(false);
  };

  return <>
    <main>
      {loading ? <div style={{ width: "100vw", height: "100vh", display: "grid", justifyItems: "center", alignItems: "center" }}>
        <Spinner animation="border" variant="primary" />
      </div> : <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", minHeight: "100vh", width: "100vw" }} className='paddingTop'>
        {
          error.isError && <Alert variant={"danger"}>
            {error.message}
          </Alert>
        }
        <h1>Editar Produto</h1>
        <section style={{ display: "grid", gap: 12, marginTop: 16 }}>
          <FormUpdatedProduct onSubmit={onEditProduct} />
        </section>
      </div>}

    </main></>;
};

export default UpdatedProduct;