import { Provider } from "react-redux";

import { StylesProvider } from "./styles";
import generateStore from "./redux/store";
import Routes from "./routes/Routes";

const store = generateStore();

function App() {
	return (
		<Provider store={store}>
			<StylesProvider>
				<Routes />
			</StylesProvider>
		</Provider>
	);
}

export default App;
