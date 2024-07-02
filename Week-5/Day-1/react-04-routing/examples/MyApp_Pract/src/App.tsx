import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import AppRoutes from './Components/AppRoutes';

function App() {
  return (
    <>
      <h3>Routing Example</h3>
      <BrowserRouter>
        <NavBar></NavBar>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </>
  );
}

export default App
