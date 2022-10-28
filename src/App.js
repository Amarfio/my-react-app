// import logo from './logo.svg';
// import './App.css';
import { ReactDOM } from 'react-dom/client';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <main className="container">
        <Navbar />
        <Main />
    </main>
  );
}

export default App;
