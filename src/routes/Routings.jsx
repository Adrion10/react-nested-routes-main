import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Photos from '../components/pages/Photos';
import Selections from '../components/pages/Selections';
import Titles30 from '../components/pages/Titles30';
import Titles100 from '../components/pages/Titles100';
import PhotoDetail from '../components/pages/PhotoDetail';
import NotFound404 from '../components/pages/NotFound404';
import Footer from '../components/Footer';

import useFetch from '../hooks/useFetch';

const Routings = () => {
  const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=25';
  const initialState = { results: null, loading: true, error: null };

  const data = useFetch(url, initialState);

  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='photos' element={<Photos data={data} />} />
          <Route path='selections' element={<Selections data={data} />}>
            <Route path='titles30' element={<Titles30 />} />
            <Route path='titles100' element={<Titles100 />} />
          </Route>
          <Route path='photoDetail/:id' element={<PhotoDetail />} />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default Routings;
