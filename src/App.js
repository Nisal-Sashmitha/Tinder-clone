import './App.css';
import Header from './Component/Header';
import SwipeButton from './Component/SwipeButton';
import TinderCards from './Component/TinderCards';



function App() {
  return (
    <div className="App">
      <Header/>
      <TinderCards/>
      <SwipeButton/>
    </div>
  );
}

export default App;
