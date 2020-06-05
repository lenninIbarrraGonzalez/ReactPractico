import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
  //videos nombre de la variable para guardar el estado
  //setVideos permit actualizar el estado
  const [videos, setVideos] = useState({
    'mylist': [],
    'trends': [],
    'original': [],
  });
  //permite ir a al api y traer la información y actualizar la información de la variable videos
  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  //useEffect resive otro parametro que se encarga de estar escuchando alguna propiedad que se actulice, si no le pasas [] se convierte en un loop infinito
  // console.log(videos);
  return (
    <div className='App'>
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Footer />

    </div>
  );
};

export default App;
