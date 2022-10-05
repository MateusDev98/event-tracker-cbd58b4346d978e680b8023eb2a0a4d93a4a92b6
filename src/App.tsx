import { useState } from "react";
import style from "./App.module.scss";
import Card from "./components/Card";
import Formulario from "./components/Formulario";
import { IEvento } from "./interfaces/IEvento";
import Calendario from "./components/Calendario";
import ListaDeEventos from "./components/ListaDeEventos";
import { useRecoilState, useRecoilValue } from "recoil";
import { listaDeEventosState } from "./components/state/atom";
import "kalend/dist/styles/index.css";

function App() {
  const eventos:IEvento[] = [];
  const [filtro, setFiltro] = useState<Date | null>();

  const aplicarFiltro = (data: Date | null) => {
    setFiltro(data);
  };

  const filtrados = !filtro
    ? eventos
    : eventos.filter(
        (evento) =>
          filtro!.toISOString().slice(0, 10) ===
          evento.inicio.toISOString().slice(0, 10)
      );

  return (
    <div className={style.App}>
      <div className={style.Coluna}>
        <Card>
          <Formulario />
        </Card>
        <hr />
        <Card>
          <ListaDeEventos aoFiltroAplicado={aplicarFiltro} />
        </Card>
      </div>
      <div className={style.Coluna}>
        <Calendario />
      </div>
    </div>
  );
}

export default App;
