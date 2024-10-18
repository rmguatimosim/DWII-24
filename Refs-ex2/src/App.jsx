import { useRef } from "react"
import Input from './components/Input.jsx'

const userData = {
  name: '',
  email: ''
}


function App() {
  const name = useRef();
  const email = useRef();

  function handleSaveData(){
      const enteredName = name.current.value;
      const enteredEmail = email.current.value;
      
      userData.name = enteredName;
      userData.email = enteredEmail;
      console.log(userData)
  }
  return (
    <>  
      <div id="app">

        <Input type="text" label="Seu nome" ref={name}/>
        <Input type="text" label="Seu E-mail" ref={email}/>
        <p id="actions">
          <button onClick={handleSaveData} >Salvar Dados</button>
        </p>

      </div>
  
    </>
  )
}

export default App
