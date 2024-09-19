import { setQueryParams } from '../utils/setQueryParams'
import { PropsProducts } from '../interfaces/products'
import { api } from './api'

export const getProducts = async (params: PropsProducts) => {
  const url = params ? setQueryParams(`/products`, params) : `/products`

  return await api.get(url)
}

export const createProduct = async (body: PropsProducts) => {
  const url = `/products`

  return await api.post(url, body)
}

export const updateProduct = async (body: PropsProducts, idProduct: number) => {
  const url = `/products/${idProduct}`

  return await api.put(url, body)
}

export const deleteProduct = async (idProduct: number) => {
  const url = `/products/${idProduct}`

  return await api.delete(url)
}
