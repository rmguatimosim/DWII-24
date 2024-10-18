import avatar from '../img/avatar.jpg';
import './Card.css'
import { useState } from 'react';



const Card = ({nome, descricao, id, removeEstudante, showConfirmaRemove}) => {

    const [apagar, setApagar] = useState(false);
    return(
        <div className={apagar ? 'card cardApagar' : 'card'}>
        <img src={avatar} alt="" />
        <span>
        <p className='nome'>Nome: {nome}</p>
        <p>Descrição: {descricao}</p>
        </span>
        {apagar ? 
            <div className='divApagar'>
                <span className='spanRemover'>Tem certeza que deseja remover o estudante? </span>
                <button className='botaoConfirmarRemover'  onClick={()=>{removeEstudante(id), showConfirmaRemove()}} >Remover</button>
                <button className='botaoCancelarRemover' onClick={()=>setApagar(false)} >Cancelar</button>
            </div>
            : <button className='botaoRemover' onClick={()=>setApagar(true)}>Remover</button>
        
        }
        

        
    </div>
    )
}
    

    export default Card;

