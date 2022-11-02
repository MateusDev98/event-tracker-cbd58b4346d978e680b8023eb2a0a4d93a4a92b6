import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { filtroDeEventosState } from "../state/atom";
import style from "./Filtro.module.scss";

const Filtro: React.FC = () => {
  const setFiltroDeEventos = useSetRecoilState(filtroDeEventosState);

  const [data, setData] = useState("");
  const [status, setStatus] = useState("");

  const submeterForm = (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    const filtro: IFiltroDeEventos = { data: null, status: null};
    if (data) filtro.data = new Date(data);
    if (status) filtro.status = status;
    setFiltroDeEventos(filtro);
  };

  return (
    <form className={style.Filtro} onSubmit={submeterForm}>
      <h3 className={style.titulo}>Filtrar por data inicial</h3>
      <input
        type="date"
        name="data"
        className={style.input}
        onChange={(evento) => setData(evento.target.value)}
        placeholder="Digite a data inicial"
        value={data}
      />

      {/* <h3 className={style.titulo}>Filtrar por status do evento</h3>
      <select
        name="status"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Todos</option>
        <option value={1}>Finalizado</option>
        <option value={0}>Não finalizado</option>
      </select> */}

      <button className={style.botao}>Filtrar</button>
    </form>
  );
};

export default Filtro;
