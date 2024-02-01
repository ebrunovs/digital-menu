import Restaurante from "./assets/restaurante.webp"
import './App.css'
import { Navegacao } from "./Navegacao"

export function App() {
  return<>
          <img src={Restaurante} alt="" className="capa" />
          <Navegacao />
        </>
}