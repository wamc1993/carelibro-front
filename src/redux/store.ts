import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import usersReducer, { initialState as usersInitialState } from "./userDuck";
import postsReducer, { initialState as postsInitialState } from "./postsDuck";
import { getInitialState, saveState } from "./getPersistedStore";

const initialState = {
	user: usersInitialState,
	posts: postsInitialState,
};

const rootReducer = combineReducers({
	user: usersReducer,
	posts: postsReducer,
});

// const composeEnhancers =
// 	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE___ || compose;

//Condicionar al ambiente para usar el devTools o el compose
const composeEnhancers = composeWithDevTools;

const generateStore = () => {
	const store = createStore(
		rootReducer,
		getInitialState(initialState),
		composeEnhancers(applyMiddleware(thunk))
	);

	store.subscribe(() => {
		saveState(store.getState());
	});
	return store;
};

export default generateStore;
