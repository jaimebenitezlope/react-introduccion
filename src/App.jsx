import CelsiusToFahrenheit from './components/calculate-celsius-to-fahrenheit-/CalculateCelsiusToFahrenheit';
import CalculateCircleArea from './components/calculate-circle-area/CalculateCircleArea';
import CalculateFahrenheitToCelsius from './components/calculate-fahrenheit-to-celsius/FahrenheitToCelsius';
import CalculateSquareArea from './components/calculate-square-area/CalculateSquareArea';
import CalculateTriangleArea from './components/calculate-triangle-area/CalculateTriangleArea';
import SayHello from './components/say-hello/SayHello';
import TotalPrice from './components/total-price/TotalPrice';
import WriteMessage from './components/write-message/WriteMessage';


const App = () => {
	return (
		<>
		<SayHello>Pepe</SayHello>
		<CalculateSquareArea side='20'/>
		<CalculateTriangleArea base='20' height='10'/>
		<CalculateCircleArea radio='10'/>
		<CelsiusToFahrenheit celsius='100'/>
		<CalculateFahrenheitToCelsius fahrenheit='100'/>
		<TotalPrice price='100' iva='0.21'/>
		<WriteMessage name='Pepe' material='amianto' size='extra-grande' note='Avisar policía'  />
		</>
	);
};

export default App;

