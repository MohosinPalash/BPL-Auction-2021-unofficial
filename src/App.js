import logo from './logo.png';
import './App.css';
import Header from './components/Header/Header'
import SelectionArea from './components/SelectionArea/SelectionArea'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  useEffect(() => {
    document.title = "BPL Auction 2021";
  }, [])

  return (
    <div className="App">
      <header className="App-header">
       <Header></Header>
       <SelectionArea></SelectionArea>
      </header>
    </div>
  );
}

export default App;
