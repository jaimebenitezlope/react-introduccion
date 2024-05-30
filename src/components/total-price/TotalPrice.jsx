const TotalPrice = ({price, iva})=>{
    
    const priceWithIva = price + (price * iva)

    return <h2>{priceWithIva}</h2>
}

export default TotalPrice