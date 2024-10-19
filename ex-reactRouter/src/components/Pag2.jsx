import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const Pag2 = () => {
    const [inputDetalhe, setInputDetalhe] = useState("")
    const navigate = useNavigate();
    const handleInputDetalheChange = (e) => {
        setInputDetalhe(e.target.value);
    }
    return(
        <>
            <h1>Página 2</h1> 
            <input type="text" size="50" value={inputDetalhe} 
            onChange={handleInputDetalheChange} />
            <button onClick={()=> {navigate(`/detalhe/${inputDetalhe}`)}} >Ver Detalhe</button>
        
        
        </>
    )

}

export default Pag2;

