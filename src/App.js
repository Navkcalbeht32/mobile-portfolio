import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import StickyMenu from './components/StickyMenu/StickyMenu';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      {/* <Portfolio />  */}
      <StickyMenu />
    </div>
  );
}

export default App;
