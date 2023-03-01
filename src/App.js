import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import Footer from './Footer';
import EventDetails from './pages/EventDetails';
import EventList from './pages/EventList';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <Header />
                <EventList />
                <Footer />
              </div>
            }
          />

<Route
            path='/:id'
            element={
              <div>
                <Header />
                <EventDetails />
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
