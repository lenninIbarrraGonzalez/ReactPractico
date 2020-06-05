import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  //videos nombre de la variable para guardar el estado
  //setVideos permit actualizar el estado
  const [videos, setVideos] = useState({
    'mylist': [],
    'trends': [],
    'originals': [],
  });
  //permite ir a al api y traer la información y actualizar la información de la variable videos
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  //useEffect resive otro parametro que se encarga de estar escuchando alguna propiedad que se actulice, si no le pasas [] se convierte en un loop infinito
  return videos;
};

export default useInitialState;
