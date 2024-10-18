import { useState } from "react"



const AdicionaCarro = ({addCarro}) =>{
    const [inputMarca, setInputMarca] = useState("");
    const handleInputMarcaChange = e =>{
        setInputMarca(e.target.value);
    }
    const [inputModelo, setInputModelo] = useState("");
    const handleInputModeloChange = e =>{
        setInputModelo(e.target.value);
    }
    const [inputAno, setInputAno] = useState("");
    const handleInputAnoChange = e =>{
        setInputAno(e.target.value);
    }
    const [inputCor, setInputCor] = useState("");
    const handleInputCorChange = e =>{
        setInputCor(e.target.value);
    }
    const handleKeyDown = e =>{
        if(e.key==='Enter'){
            concluir();
        }

    }

    const concluir =  () => {
        if(inputMarca && inputModelo && inputAno && inputCor){
            addCarro({marca: inputMarca, modelo: inputModelo, ano: inputAno, cor: inputCor, emEstoque: true})
        }
    }


    return(
        <div>
            <p>Adicionar novo veículo</p>
            <label htmlFor="marca">Marca</label>
            <input type="text" id="marca" size="50" value={inputMarca} onChange={handleInputMarcaChange}/>
            <br />
            <label htmlFor="modelo">Modelo</label>
            <input type="text" id="modelo" size="50" value={inputModelo} onChange={handleInputModeloChange}/>
            <br />
            <label htmlFor="ano">Ano</label>
            <input type="number" id="ano" size="4" value={inputAno} onChange={handleInputAnoChange}/>
            <br />
            <label htmlFor="cor">Cor</label>
            <input type="text" id="cor" size="50" value={inputCor} onChange={handleInputCorChange} onKeyDown={handleKeyDown}/>


            <button className="botCadastrar" onClick={concluir}>


            Cadastrar</button>

        </div>







    )


}
export default AdicionaCarro;