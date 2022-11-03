import { createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    data: dataReducer,
    loadingProcess: newsListReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;