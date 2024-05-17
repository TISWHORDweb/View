import './index.css';
import './Css/style.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Config/routes';
import { MyContextProvider } from './context/Context';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyContextProvider>
        <div className="App">
          <Routes />
        </div>
      </MyContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
