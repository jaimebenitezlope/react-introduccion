const CelsiusToFahrenheit = ({celsius})=>{

    const result = celsius * 1.8 + 32
    
    return <h2>{result}</h2>
}

export default CelsiusToFahrenheit