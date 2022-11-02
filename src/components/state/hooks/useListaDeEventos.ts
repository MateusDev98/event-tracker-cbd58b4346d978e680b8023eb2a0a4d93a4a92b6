import { useRecoilValue } from "recoil";
import { eventosFiltradosState } from "../seletores";

const useListaDeEventos = () => {
  // Aqui deixei a possibilidade de manipular a lista caso queira antes de retorna-la, mas também pode retornar direto do nosso atomo.
  const listaDeEventos = useRecoilValue(eventosFiltradosState);

  return listaDeEventos;
};

export default useListaDeEventos;