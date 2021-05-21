import "./AppStyles.js";
import Container from "./AppStyles";
import Header from "./components/Header/";
import MainSection from "./components/MainSection/";
import Footer from "./components/Footer/";

const App = () => (
	<Container>
		<Header />
		<MainSection />
		<Footer />
	</Container>
);

export default App;
