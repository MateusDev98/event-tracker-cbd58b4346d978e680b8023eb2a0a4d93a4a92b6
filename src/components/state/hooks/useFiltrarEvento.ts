import { useRecoilValue } from "recoil";
import { listaDeEventosState } from "../atom";

const useFilterEvento = () => {
  const listaDeEventos = useRecoilValue(listaDeEventosState);

  return listaDeEventos;
};

export default useFilterEvento;