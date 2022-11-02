import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../atom";

const useDeletaEvento = () => {
  const setListaDeEventos = useSetRecoilState(listaDeEventosState);

  return (evento: IEvento) => {
    setListaDeEventos((prevState) => [
      ...prevState.filter((evt) => evt.id !== evento.id),
    ]);
  };
};

export default useDeletaEvento;
