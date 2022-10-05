import React from "react";
import { IEvento } from "../../interfaces/IEvento";
import style from "./Calendario.module.scss";
import ptBR from "./localizacao/ptBR.json";
import Kalend, { CalendarEvent, CalendarView } from "kalend";
import "kalend/dist/styles/index.css";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { listaDeEventosState } from "../state/atom";

interface IKalendEvento {
  id?: number;
  startAt: string;
  endAt: string;
  summary: string;
  color: string;
}

const Calendario: React.FC = () => {
  const eventosKalend = new Map<string, IKalendEvento[]>();
  const eventos = useRecoilValue(listaDeEventosState);
  const setListaDeEventos = useSetRecoilState(listaDeEventosState);

  eventos.forEach((evento) => {
    const chave = evento.inicio.toISOString().slice(0, 10);
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, []);
    }
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: "blue",
    });
  });

  const onEventDragFinish = (updatedEvent: CalendarEvent) => {
    setListaDeEventos((prev) =>
      [...prev].map((evt) => {
        if (evt.id === updatedEvent.id) {
          return {
            ...evt,
            inicio: new Date(updatedEvent.startAt),
            fim: new Date(updatedEvent.endAt),
          };
        }
        return evt;
      })
    );
  };

  // const onEventDragFinish = (updatedEvent: CalendarEvent) => {
  //   console.log(updatedEvent);
  //   const evento = eventos.find(
  //     (evt) => evt.descricao === updatedEvent.summary
  //   );
  //   if (evento) {
  //     const eventoAtualizado = {
  //       ...evento,
  //     };
  //     eventoAtualizado.inicio = new Date(updatedEvent.startAt);
  //     eventoAtualizado.fim = new Date(updatedEvent.endAt);
  //     setListaDeEventos((prevState) => {
  //       const indice = prevState.findIndex((evt) => evt.id === evento.id);
  //       return [
  //         ...prevState.slice(0, indice),
  //         eventoAtualizado,
  //         ...prevState.slice(indice + 1),
  //       ];
  //     });
  //   }
  // };

  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.MONTH}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        calendarIDsHidden={["work"]}
        language={"customLanguage"}
        customLanguage={ptBR}
        onEventDragFinish={(_, updatedEvent) => onEventDragFinish(updatedEvent)}
      />
    </div>
  );
};

export default Calendario;
