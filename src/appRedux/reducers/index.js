import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import ListReducer from "./List";

//i combined the reducers here. I added the router because i always want to detect the router.
const RootReducer = (history) => combineReducers({
    router: connectRouter(history),
    list: ListReducer
});

export default RootReducer;
