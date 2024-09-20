import * as yup from 'yup'

export const schemaProduct = yup.object().shape({
  produto: yup.string().min(1, 'Categoria Invalida').required(),
  quantidade: yup
    .number()
    .positive('O preço deve ser um número positivo')
    .min(0, 'O preço não pode ser negativo')
    .required(),
  categoria: yup.string().min(1, 'Categoria Invalida').required(),
  preço:  yup.string().min(1, 'Preço Invalida').required(),
})
