import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Table from './components/Table';


function App() {

  const texto = "Películas IUDigital";
  return (
    <div className="container">
      <NavBar titulo={texto}/>
      <Table/>
      
    </div>
  );
}

export default App;
