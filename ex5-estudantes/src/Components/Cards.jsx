import { useState } from 'react';
import Card from './Card';
import './Cards.css'
import Message from './Message';



const Cards = ({nomeCurso, lista, removeEstudante}) =>{
    const [msgConfirmaRemove, setMsgConfirmaRemove] = useState(false);
    const showConfirmaRemove = () => {
    setMsgConfirmaRemove(true);
    setTimeout(()=> {setMsgConfirmaRemove(false)}, 2000);
    }
    return(
    <>
        <h3>{nomeCurso}</h3>
        {lista.length > 0 ?
            lista.map(estudante => <Card id={estudante.id} key={estudante.id} nome={estudante.nome} descricao={estudante.descricao} removeEstudante = {removeEstudante} showConfirmaRemove={showConfirmaRemove}/>)
            : <p className='vazio'>Não a estudantes cadastrados.</p>
        
    
        }
        {msgConfirmaRemove ? <Message className="warning">Estudante excluído com sucesso!</Message> : null}
    
    </>
    )
    }
    export default Cards;
    