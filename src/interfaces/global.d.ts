interface IEvento {
  id?: number
  descricao: string
  completo: boolean
  inicio: Date
  fim: Date
}

interface IFiltroDeEventos {
  data?: Date | null; 
  status?: string | null;
}