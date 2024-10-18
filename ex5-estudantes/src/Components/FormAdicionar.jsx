import { useState } from "react";
import Message from "./Message";

const FormAdicionar = ({addEstudante, toggleForm, showConfirmAdd}) =>{
    const [inputNome, setInputNome] = useState("");
    const [inputDescricao, setInputDescricao] = useState("");
    const [msgIncompleteForm, setMsgIncompleteForm] = useState(false);

    const handleInputNomeChange = e =>{
        setInputNome(e.target.value);
    }
    const handleInputDescricaoChange = e =>{
        setInputDescricao(e.target.value);
    }
    const handleKeyDown = e =>{        
        if(e.key==='Enter')
        if(inputNome && inputDescricao){
            addEstudante({nome: inputNome, descricao: inputDescricao});
            setInputDescricao("");
            setInputNome("");
            toggleForm();
            showConfirmAdd();
        }
        else{
            showIncompleteFormMessage();
        }
    }

    const showIncompleteFormMessage = () => {
        setMsgIncompleteForm(true);
        setTimeout(() => {setMsgIncompleteForm(false)}, 2000);
    }


    return(
        <div className="cardAdicionar">
            <p>Adicionar novo estudante:</p>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" size="50" value={inputNome} onChange={handleInputNomeChange}/>
            <br />
            <label htmlFor="descricao">Descrição:</label>
            <textarea name="descricao" id="descricao" cols="58" rows="5" value={inputDescricao} onChange={handleInputDescricaoChange}
            onKeyDown={handleKeyDown}   ></textarea>
            
            <button className="addButton" onClick={()=>{
                if(inputNome && inputDescricao){
                    addEstudante({nome: inputNome, descricao: inputDescricao});
                    setInputDescricao("");
                    setInputNome("");
                    toggleForm();
                    showConfirmAdd();
                }
                else{
                    showIncompleteFormMessage();
                }
                

            }}>Adicionar</button>
            {msgIncompleteForm ? <Message className="failure">Preencha todos os campos do formulário!</Message> : null}
        </div>
    )

}

export default FormAdicionar
