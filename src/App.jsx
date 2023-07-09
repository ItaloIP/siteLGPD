import './App.css';
import Header from './components/header/Header';
import { Route, BrowserRouter } from "react-router-dom";
import loginPage from "./pages/login/loginPage";

function App() {
  const Routes = () => {
    return (
      <BrowserRouter>
        <Route component = { Login } path='/' exact />
      </BrowserRouter>
    )
  }

  return (
    <>
    <Header/>
    
    <h1 className="text-3xl font-bold underline">
      ok
    </h1>
    </>
  )
}

export default App
