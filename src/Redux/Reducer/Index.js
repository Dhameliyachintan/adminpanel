import {combineReducers} from "redux" ;
import { CounterFReducer } from "./Counter.reducer";

export const rootReducer = combineReducers ({
    counter: CounterFReducer
})