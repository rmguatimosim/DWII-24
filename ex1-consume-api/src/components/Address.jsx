
const Address = ({address}) =>{
    let fullAddress = <h2>Procurando sua localização... </h2>;
    if(address){
        fullAddress = 
        <div>
            {address.amenity ? <h2>Você está localizado em {address.amenity}</h2>: '' }
            <h2>Sua localização: </h2>
            <h3>{address.road}{address.house_number ? <span>, {address.house_number}</span> : '' }</h3>
            <h3>Bairro: {address.neighbourhood}</h3>
            <h3>{address.city && address.city}</h3>
            <h3>{address.town && address.town}</h3>
            <h3>{address.state}</h3>
            <h3>{address.country}</h3>
            <h3>CEP: {address.postcode}</h3>
        </div>
    }

    return(
        <>
        <h2>Você está em {address.town}.</h2>       
        {fullAddress}
    </>
    )
    
}

    export default Address;
