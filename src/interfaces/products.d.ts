export interface PropsProducts {
  id?: number;
  produto: string;
  quantidade: number;
  categoria: string;
  preço: string;
  created_at?: Date | string;
}
