import './Tabs.css'


const Tabs = ({cursos, changeCursoSelecionado, cursoSelecionado}) => 

<ul>
    {cursos.map(curso => <li className={curso.sigla == cursoSelecionado ? 'selected' : undefined}
    key={curso.sigla} onClick={() => changeCursoSelecionado(curso.sigla)} > {curso.sigla}</li>)}  
</ul>



export default Tabs;