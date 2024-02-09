import Contato from "./components/Contato"
import Header from "./components/Header"
import Infos from "./components/Infos"
import NavBar from "./components/NavBar"
import Ofertas from "./components/Ofertas"
import Sobre from "./components/Sobre"

function App() {

  return (
    <>
      <NavBar/>
      <Header/>
      <Infos/>
      <Ofertas/>
      <Sobre/>
      <Contato/>
      <footer> 
        <small> @ 2024 | Desenvolvido por Luis Gustavo Braga </small>
      </footer>
    </>
  )
}

export default App
