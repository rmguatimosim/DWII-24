import CardCarro from "./CardCarro";



const Tabela = ({lista, nome, removeCarro, atualizaStatus}) =>{


    return(
        <div>   
            <h3>{nome}</h3>
            {lista.length > 0 ?
            lista.map(carro => <CardCarro id={carro.id} key={carro.id}
            marca={carro.marca} modelo={carro.modelo} ano={carro.ano} cor={carro.cor} emEstoque={carro.emEstoque} removeCarro={removeCarro} atualizaStatus={atualizaStatus}/> )
        
        
        
        
            : <p>Nenhum veículo cadastrado.</p>
            }



        </div>

    )

}
export default Tabela;