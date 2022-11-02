import { atom } from "recoil";
import { eventosAsync } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  // Podemos adicionar um seletor como valor padrão
  default: eventosAsync,
  // default: [
  //   {
  //     descricao: "Estudar React",
  //     inicio: new Date("2022-10-04T09:00"),
  //     fim: new Date("2022-10-05T13:00"),
  //     completo: false,
  //     id: 1642342747,
  //   },
  //   {
  //     descricao: "Estudar Recoil",
  //     inicio: new Date("2022-10-06T09:00"),
  //     fim: new Date("2022-10-07T11:00"),
  //     completo: false,
  //     id: 1642342959,
  //   },
  // ],
});

export const filtroDeEventosState = atom<IFiltroDeEventos>({
  key: "filtroDeEventosState",
  default: {},
});
