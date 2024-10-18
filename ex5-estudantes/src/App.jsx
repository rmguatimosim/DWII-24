import logo from './img/logoif.png';
import './App.css';
import Cards from './Components/Cards';
import { useState } from 'react';
import CardAdicionar from './Components/CardAdicionar';
import Tabs from './Components/Tabs';
import {v4 as uuidv4} from 'uuid';



function App() {
  const [estudantes, setEstudantes] = useState([]);
  const cursos = [
      {sigla: 'ADS',
      nome: 'Tecnologia em Análise e Desenvolvimento de Sistemas'
      },
      {
        sigla: 'TPG',
        nome: 'Tecnologia em Processos Gerenciais'
      },
      {
        sigla: 'MAT',
        nome: 'Licenciatura em Matemática'
      },
      {
        sigla: "LET",
        nome: "Licenciatura em Letras"
      }
  ]
  const [cursoSelecionado, setCursoSelecionado] = useState('ADS');

  const changeCursoSelecionado = curso =>{
    setCursoSelecionado(curso);
  }


  const addEstudante = (estudante) => {
      setEstudantes([...estudantes, {...estudante, id: uuidv4(), curso: cursoSelecionado}]);
  }
  const removeEstudante = id => {
    setEstudantes(estudantes.filter(estudante => estudante.id != id));
  }


  return (
    <div className="App">
      <header className="App-header">
         <a href="https://ifrs.edu.br" target="_blank"> <img src={logo} alt="logo" className='App-logo'/></a>

        <p>Estudantes:</p>

        <Tabs cursos={cursos} cursoSelecionado={cursoSelecionado} changeCursoSelecionado={changeCursoSelecionado} />

        <Cards nomeCurso={cursos.find(curso => curso.sigla == cursoSelecionado).nome} lista={estudantes.filter(estudante => estudante.curso == cursoSelecionado)} removeEstudante={removeEstudante}/>
        
        <CardAdicionar cursoSelecionado={cursoSelecionado} addEstudante={addEstudante} 
         />


      </header>
    </div>
  );
}

export default App;
