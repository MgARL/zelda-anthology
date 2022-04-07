// Import dependencies
import './App.css';
import logo from './images/Link_256x256.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// import bootstrap comps
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'


// import Components
import DisplayCategory from './components/DisplayCategory';
import Home from './components/Home';
import Item from './components/Item';
import Page404 from './components/Page404';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div className="App fill-page">
      <Router>
        <Container fluid className='bg1 pb-2 sticky-top'>
          <NavigationBar Link={Link} logo={logo} />
        </Container>
        <Container className='pb-3 footer-fill'>
          <ScrollToTop>
            <Routes>
              <Route path='/' element={<Home logo={logo} />} />
              <Route path='/category/:category' element={<DisplayCategory Link={Link} />} />
              <Route path='/item/:item' element={<Item />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </ScrollToTop>
        </Container>
        <Footer logo={logo} Link={Link} />
      </Router>
    </div>
  );
}

export default App;
