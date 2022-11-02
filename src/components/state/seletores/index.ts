import { selector } from "recoil";
import { filtroDeEventosState, listaDeEventosState } from "../atom";

const parseDateToISOString = (date: Date): string =>
  date.toISOString().slice(0, 10);

// seletores derivão do estado principal do meu atomo, podemos usalo para buscar algo que esta no servdior via api ou até mesmo e um arquivo enfim, não tendo como finalizada somente este tipo de funcionalidade
export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroDeEventosState);
    const todosOsEventos = get(listaDeEventosState);

    const eventos = todosOsEventos.filter((evento) => {
      if (filtro.data) {
        return (
          parseDateToISOString(evento.inicio) ===
          parseDateToISOString(filtro.data)
        );
      } else if (filtro.status) {
        return evento.completo === Boolean(parseInt(filtro.status));
      } else if (filtro.status && filtro.data) {
        return (
          evento.completo === Boolean(parseInt(filtro.status)) &&
          parseDateToISOString(evento.inicio) ===
            parseDateToISOString(filtro.data)
        );
      } else return evento;
    });
    return eventos;
  },
});

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async () => {
    const respostaHttps = await fetch("http://localhost:8080/eventos");
    // https://javascript.info/fetch
    // https://fetch.spec.whatwg.org/#response-class
    const eventosJson: IEvento[] = await respostaHttps.json();
    return eventosJson.map(evento => ({
        ...evento,
        inicio: new Date(evento.inicio),
        fim: new Date(evento.fim),
    }))
  },
});
