import { useState, useRef } from "react";

export default function Player(){
    const inputName = useRef();
    const [name, setName] = useState("");
    
    const handleClick = (e) => {
        if(inputName.current.value){
            setName(inputName.current.value);
            inputName.current.value = '';
        }
        else{
            setName("Desconhecido");
        }
    }

    const handleKeyUp = (e) =>{
        if(e.key == "Enter"){
            handleClick();
        }
    }
    return(
        <section id="player">
            <h2>Bem vindo {name ? name : "Desconhecido"}</h2>
            <p>
                <input ref={inputName} type="text" onKeyUp={handleKeyUp}/>
                <button onClick={handleClick} >Definir nome</button>

            </p>

        </section>
    )



}