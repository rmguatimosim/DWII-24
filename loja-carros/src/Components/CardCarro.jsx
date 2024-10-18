

const CardCarro = ({marca, modelo, ano, cor, id, emEstoque, atualizaStatus, removeCarro}) => {

    return(
        <div>
            <p className="marca">Marca: {marca}</p>
            <p className="modelo">Modelo: {modelo}</p>
            <p className="ano">Ano: {ano}</p>
            <p className="cor">Cor: {cor}</p>

            {emEstoque ?
                <div className="botoesEstoque">
                    <button className="botaoVendido" onClick={()=>
                        {atualizaStatus(id)}}>Vendido</button>
                    <button className="botaoRemove" onClick={() => removeCarro(id)}>Remover</button>
                </div>
            :
                <div>
                    <button className="botaoRemove" onClick={() => removeCarro(id)}>Remover</button>
                </div>
            }

        </div>
    )
}
export default CardCarro;
