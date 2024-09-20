import { setQueryParams } from '../utils/setQueryParams'
import { PropsProducts, PropsProductsParams } from '../interfaces/products'
import { api } from './api'
const apiKey = import.meta.env.VITE_API_KEY

export const getProducts = async (params?: PropsProductsParams) => {
  const url = params ? setQueryParams(`/products`, params) : `/products`

  const headers = {
    Authorization: `Bearer ${apiKey}`,
  }

  return await api.get(url, { headers })
}

export const createProduct = async (body: PropsProducts) => {
  const url = `/products`

  const headers = {
    Authorization: `Bearer ${apiKey}`,
  }

  return await api.post(url, body, { headers })
}

export const updateProduct = async (body: PropsProducts, idProduct: number) => {
  const url = `/products/${idProduct}`

  const headers = {
    Authorization: `Bearer ${apiKey}`,
  }

  return await api.put(url, body, { headers })
}

export const deleteProduct = async (idProduct: number) => {
  const url = `/products/${idProduct}`

  const headers = {
    Authorization: `Bearer ${apiKey}`,
  }

  return await api.delete(url, { headers })
}
