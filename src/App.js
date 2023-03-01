import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import Footer from './Footer';
import EventDetails from './pages/EventDetails';
import EventList from './pages/EventList';
import { FilterProvider } from './components/Contexts/filterContext';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <FilterProvider>
                <div>
                <Header />
                <EventList />
                <Footer />
              </div>
              </FilterProvider>
            }
          />

<Route
            path='/:id'
            element={
              <FilterProvider>
              <div>
              <Header />
              <EventDetails />
              <Footer />
            </div>
            </FilterProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
