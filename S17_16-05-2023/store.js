import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer.js";

let store = createStore(reducer);

export default store;
