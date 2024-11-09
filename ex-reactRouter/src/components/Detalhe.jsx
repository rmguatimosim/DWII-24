import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
useState

const Detalhe = () => {
    const [text, setText] = useState ("")
    const handleSetText = (e) => {
        setText(!text)
    }
    const params = useParams()
    const navigate = useNavigate();
    const texto = "Outro texto"
    const umTexto = "Um texto"
    
    return(
        <>
            <h1>Foi recebido: {params.texto}</h1>
            <button onClick={()=>{navigate(-1)}} >Voltar</button>
            <button onClick={()=>{navigate('/')}} >Ir para Home</button>
            <button onClick={()=>{navigate(`/detalhe/${texto}`)}} >Outro texto</button>
            <button onClick={()=>{
                if(text){
                    handleSetText();
                    navigate(`/detalhe/${texto}`)
                    
                }
                else{
                    handleSetText();
                    navigate(`/detalhe/${umTexto}`)
                    
                }
            }}   >{text? {texto} : {umTexto}}</button>
        </>
    )

}

export default Detalhe