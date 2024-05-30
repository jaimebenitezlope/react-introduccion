const CalculateFahrenheitToCelsius = ({fahrenheit})=>{

    const result = (fahrenheit - 32) / 1.8
    
    return <h2>{result}</h2>
}

export default CalculateFahrenheitToCelsius