import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { autoRehydrate, persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import thunk from "redux-thunk";
import rootReducer from "./reducer";

// simple - no thunk, no persistence
export const store = createStore(rootReducer, compose(composeWithDevTools(applyMiddleware(thunk))));

// const persistConfig = {
//   key: 'root',
//   storage
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)
// const composedEnhancers = compose(composeWithDevTools(applyMiddleware(thunk)))

// export const store = createStore(persistedReducer, composedEnhancers)
// export const persistor = persistStore(store)

