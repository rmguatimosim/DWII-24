import { useState } from "react";
import './CardAdicionar.css'
import FormAdicionar from "./FormAdicionar";
import Message from "./Message";



const CardAdicionar = ({addEstudante}) => {
    const [adicionar, setAdicionar] = useState(false);
    const toggleForm = () => {
        setAdicionar(!adicionar);
    }
const [msgConfirmAdd, setMsgConfirmAdd] = useState(false);
const showConfirmAdd = () => {
    setMsgConfirmAdd(true);
    setTimeout(()=> {setMsgConfirmAdd(false)}, 2000);
}

    return(
        <>
            <button className="toggleButton" onClick={toggleForm}>{adicionar ? 'Fechar' : 'Adicionar novo estudante'}</button>
            {adicionar?
                <FormAdicionar addEstudante={addEstudante} toggleForm={toggleForm} showConfirmAdd={showConfirmAdd}/>    
            : null}   
            {msgConfirmAdd ? <Message className="success">Estudante cadastrado com sucesso! 
            </Message> : null}
         </>


    )
}

export default CardAdicionar;