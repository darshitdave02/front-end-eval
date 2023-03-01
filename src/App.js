import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import Footer from './Footer';
import EventDetails from './pages/EventDetails';

function App() {
  return (
    <div className='App'>
      <Header />

      <EventDetails />

      <Footer />

    </div>
  );
}

export default App;
