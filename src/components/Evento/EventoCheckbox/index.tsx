import React from "react";
import { useRecoilState } from "recoil";
import { IEvento } from "../../../interfaces/IEvento";
import { listaDeEventosState } from "../../state/atom";

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  const [listaDeEventos, setListaDeEventos] =
    useRecoilState(listaDeEventosState);
  const estilos = [
    "far",
    "fa-2x",
    evento.completo ? "fa-check-square" : "fa-square",
  ];

  const alterarStatusEvento = () => {
    const novaListaDeEventos = listaDeEventos.map((evt) => {
      return {
        ...evt,
        completo: evt.id === evento.id ? !evt.completo : evt.completo,
      };
    });
    setListaDeEventos(novaListaDeEventos);
  };

  // const alterarStatusEventoFuncaoAlternativa = () => {
  //   const eventoAlterado = {...evento};
  //   eventoAlterado.completo = !eventoAlterado.completo;
  //   setListaDeEventos((prevState) => {
  //     const indice = prevState.findIndex((evt) => evt.id === evento.id);
  //     return [
  //       ...prevState.slice(0, indice),
  //       evento,
  //       ...prevState.slice(indice + 1),
  //     ];
  //   });
  // };

  return <i className={estilos.join(" ")} onClick={alterarStatusEvento}></i>;
};

export default EventoCheckbox;
