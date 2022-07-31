import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {typeDispatch, typeReducer} from "../redux/store";


export const useTypedDispatch = (): typeDispatch => useDispatch()
export const useTypedSelector: TypedUseSelectorHook<typeReducer> =  useSelector