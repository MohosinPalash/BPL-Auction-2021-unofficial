import logo from './logo.png';
import './App.css';
import Header from './components/Header/Header'
import SelectionArea from './components/SelectionArea/SelectionArea'

function App() {
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
