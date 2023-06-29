import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import MoviesDetails from './component/MoviesDetails';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/details/:id' element={<MoviesDetails/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
