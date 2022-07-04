import {combineReducers} from "redux" ;
import { CounterReducer } from "./Counter.reducer";
import { medicineReducer } from "./medicine.reducer";

export const rootReducer = combineReducers ({
    counter: CounterReducer,
    Medicinedata : medicineReducer
})