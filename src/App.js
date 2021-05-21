import "./AppStyles.js";
import { Container, Header } from "./AppStyles.js";
import Card from "./components/Card";

function App() {
	return (
		<Container className="App">
			<Header className="App-header">
				¿Cuáles son tus necesidades como...
			</Header>
			<main>
				<Card />
			</main>
		</Container>
	);
}

export default App;
