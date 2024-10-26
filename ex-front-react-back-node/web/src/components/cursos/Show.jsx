import axios from "axios";
import {Link, useRouteLoaderData, redirect, Form} from 'react-router-dom'

const Show = () => {
    const  curso = useRouteLoaderData('cursoDetail')
    return(
        <>  
            <h1>Detalhes do curso</h1>
            <h2>Sigla; {curso.sigla}</h2>
            <h2>Sigla; {curso.nome}</h2>
            <Link to={`/cursos/${curso.id}/edit`}><button>Editar</button></Link>
            <br /><br />
            <Link to='/cursos'><button>Voltar</button></Link>
        </>
    )
}

export default Show;

export async function getCurso({params}){
    const url = `http://localhost:3000/cursos/${params.id}`
    const {data} = await axios.get(url);
    return data;
}