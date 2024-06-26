// * 1 - [x] - IMPORTE O createContext DO REACT
// * 2 - [x] - CRIAR A VARIÁVEL DO CONTEXTO
// * 3 - [x] - EXPORTAR A VARIÁVEL DO CONTEXTO
// *
// * 4 - [x] - CRIE A VARIÁVEL DO PROVIDER
// * 5 - [x] - RECEBA A PROP CHILDREN
// * 6 - [x] - DEFINA OS DADOS GLOBAIS
// * 7 - [x] - CRIE O JSX DO PROVIDER E PASSE OS DADOS GLOBAIS NA PROP value
// * 8 - [x] - IMPORTE O PROVIDER NO ARQUIVO APP.JSX
// *
// * 9 - [] - IMPORTE O CONTEXTO NO ARQUIVO QUE FOR UTILIZAR
// * 10 - [] - IMPORTE O useContext DO REACT
// * 11 - [] - RECEBA OS DADOS GLOBAIS USANDO O useContext

import { createContext, useEffect, useState } from "react";
import useFetch from "../utils/useFetch";

export const TrailsContext = createContext();

export const TrailsContextProvider = ({ children }) => {
  const data = useFetch("/api.json");
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    if (!!data) {
      setTrails(data);
    }
  }, [data]);

  const addTrail = (newTrail) => {
    setTrails((prevTrails) => [...prevTrails, newTrail]);
  };

  return (
    <TrailsContext.Provider value={{ trails, addTrail }}>
      {children}
    </TrailsContext.Provider>
  );
};
