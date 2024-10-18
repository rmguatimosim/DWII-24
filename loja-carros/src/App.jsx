import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import './App.css'
import AdicionaCarro from './Components/AdicionaCarro';
import Tabela from './Components/Tabela';

function App() {
const [carros, setCarros] = useState([]);


const addCarro = (carro) =>{
  setCarros([...carros, {...carro, id: uuidv4()}]);
}
const atualizaStatus = (id) =>{
  const carroAtualiza = carros.find(carro => carro.id == id);
  //removeCarro(id);
  carroAtualiza.emEstoque = false;
  setCarros((prevState) => ({...prevState, carroAtualiza}));
  //addCarro(carroAtualiza);
  
  
}
const removeCarro = id => {
  setCarros(carros.filter(carro=> carro.id != id));
}

  

  return (
    <>
      <h1>Lojão do Celso</h1>
      <div className='Estoque'>
      <Tabela nome = "Em Estoque" lista={carros.filter(carro => carro.emEstoque == true)}
        removeCarro={removeCarro} atualizaStatus={atualizaStatus}/>


      </div>
      <div className='vendidos'>
      <Tabela nome = "Vendidos" lista={carros.filter(carro => carro.emEstoque == false)}
      removeCarro={removeCarro}/>

      </div>

      <AdicionaCarro addCarro={addCarro}/>
    </>
  )
}

export default App
