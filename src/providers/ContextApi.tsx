
// conferir se continua sendo necessário
import React, { createContext, useContext, useState } from 'react';
import {PropsProducts} from "../interfaces/products"

const ContextApp = createContext(null);

export type AppContextData = {
    loading: boolean;
    setLoading:  React.Dispatch<React.SetStateAction<boolean>>;
    product: PropsProducts | undefined;
    setProduct: React.Dispatch<React.SetStateAction<PropsProducts | undefined>>;
};

function ContextProvider({
    children,
}: {
    children: React.ReactNode | JSX.Element[] | JSX.Element;
}) {
    const [loading, setLoading] = useState<boolean>(false);
    const [product, setProduct] = useState<PropsProducts>();

    return (
        <ContextApp.Provider value={{
            loading, setLoading,
            product, setProduct
        }}>
            {children}
        </ContextApp.Provider>
    );
}

const useAppContext = () => {
    const context = useContext(ContextApp);

    if (!context) {
        throw new Error('Trying to acess MyContext out of the Provider');
    }

    return context;
};

export { ContextProvider, useAppContext };
