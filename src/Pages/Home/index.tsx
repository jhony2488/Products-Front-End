import React, { useEffect, useState } from 'react';
import { useAppContext, AppContextData } from "../../providers/ContextApi";
import { useNavigate } from "react-router-dom";
import { getProducts, deleteProduct } from "../../services/products";
import { CardProduct } from "../../Components/CardProduct/CardProduct";
import { PropsProducts } from "../../interfaces/products";
import { Alert, Spinner } from 'react-bootstrap';

const Home: React.FC = () => {

    const { setProduct, loading, setLoading }: AppContextData = useAppContext();

    const navigate = useNavigate();

    const [products, setProducts] = useState<Array<PropsProducts>>([])
    const [category, setCategory] = useState<string>("")
    const [error, setError] = useState<{ message: string; isError: boolean; }>({ message: "", isError: false })

    const excludeProduct = async (id: number) => {
        await deleteProduct(id).then(() => {
            getProductsAll();
        }).catch(async (error) => {
            const errorData = await error?.response?.data;

            if (errorData.message) {
                setError({ message: errorData.message, isError: true });
                return;
            }
            setError({ message: "Erro desconhecido , tente novamente mais tarde", isError: true });
        })
    };

    const getProductsAll = async () => {
        setLoading(true);
        await getProducts().then((response) => {
            setProducts(response.data.result)
            setLoading(false);
        }).catch(async (error) => {
            const errorData = await error?.response?.data;

            if (errorData.message) {
                setError({ message: errorData.message, isError: true });
                if(errorData.message=="Nenhum produto foi encontrado"){
                    setProducts([])
                }
                
                setLoading(true);
                return;
            }
            setLoading(false);
            setError({ message: "Erro desconhecido , tente novamente mais tarde", isError: true });
        });
        setLoading(false);
    };

    const onViewProduct = async (product: PropsProducts) => {
        setProduct(product)
        navigate("/product");
    };

    const onEditProduct = async (product: PropsProducts) => {
        setProduct(product)
        navigate("/edit-product");
    };

    const getProductsFilter = async () => {

        await getProducts({ categoria: category }).then((response) => {
            setProducts(response.data.result)
        }).catch(async (error) => {
            const errorData = await error?.response?.data;

            if (errorData.message) {
                setError({ message: errorData.message, isError: true });
                return;
            }
            setError({ message: "Erro desconhecido , tente novamente mais tarde", isError: true });
        });
    };

    useEffect(() => {
        getProductsAll();
    }, [])

    return <>
        <main>
            {loading ? <div style={{ width: "100vw", height: "100vh", display: "grid", justifyItems: "center", alignItems: "center" }}>
                <Spinner animation="border" variant="primary" />
            </div> : <>
                {
                    error.isError && <Alert variant={"danger"}>
                        {error.message}
                    </Alert>
                }
                <h1>Produtos</h1>
                <div>

                </div>
                <section style={{ display: "grid", gap: 12, justifyItems: "center", width: "100vw",alignItems: "flex-start", paddingTop: 24, paddingBottom: 24  }}>
                    {products.map((product, index) => {
                        return (
                            <>
                                <CardProduct onEdit={()=>onEditProduct(product)} onExclude={() => excludeProduct(product?.id || 0)} onViewOne={() => onViewProduct(product)} name={product.produto} price={product.preço} amount={product.quantidade} category={product.categoria} key={index} />
                            </>
                        )
                    })}
                </section>
            </>}

        </main></>;
};

export default Home;