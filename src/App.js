import './App.css';
import Header from './components/header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
