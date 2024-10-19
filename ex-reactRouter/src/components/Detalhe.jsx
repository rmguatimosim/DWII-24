import { Navigate, useNavigate, useParams } from "react-router-dom"

const Detalhe = () => {
    const params = useParams()
    const navigate = useNavigate();
    const texto = "Outro texto"
    return(
        <>
            <h1>Foi recebido: {params.texto}</h1>
            <button onClick={()=>{navigate(-1)}} >Voltar</button>
            <button onClick={()=>{navigate('/')}} >Ir para Home</button>
            <button onClick={()=>{navigate(`/detalhe/${texto}`)}} >{texto}</button>
        </>
    )

}

export default Detalhe