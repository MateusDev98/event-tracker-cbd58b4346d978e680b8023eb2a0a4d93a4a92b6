import { useSetRecoilState } from "recoil";
import { obterId } from "../../../util";
import { listaDeEventosState } from "../atom";

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState(listaDeEventosState);

  return (evento: IEvento) => {
    const hoje = new Date();
    if (evento.inicio < hoje || evento.fim < hoje) {
      alert(
        "Nenhum evento pode ser adicionado com data e hora inicial/final menor que a data e hora atual!"
      );
      // throw new Error(
      //   "Nenhum evento pode ser adicionado com data inicial menor que a data atual!"
      // ); Somente utilze quando não tiver um try catch na hora da utilização e quando for usar remova o alert e adicione no seu catch
    } else {
      evento.id = obterId();
      setListaDeEventos((listaDeEventos) => [...listaDeEventos, evento]);
    }
  };
};

export default useAdicionarEvento;
