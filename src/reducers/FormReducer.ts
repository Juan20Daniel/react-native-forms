import { Form, InputValue } from "../types/Form";
import { FormTypes } from "./Types";

export const formReducer = (state:Form, action:FormTypes):Form => {
    switch (action.type) {
        case 'CHANGE_VALUE':
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.field]:{...state.values[action.field], value:action.value}
                }
            }
        case 'PUT_FOCUS':
            const putFocus: Record<string, InputValue> = {}
            for(let key in state.values) {
                putFocus[key] = {
                    value:state.values[key].value, 
                    focus: action.field === key ? action.value : false
                }
            }
            return {
                ...state,
                values: {
                    ...putFocus
                }
            }
        case 'CLEAR_ALL_FOCUS': 
            const removeFocus: Record<string, InputValue> = {}
            for(let key in state.values) {
                removeFocus[key]={value:state.values[key].value, focus:false}
            }
            return {
                ...state,
                values: {
                    ...removeFocus
                }
            }
        default:
            return {...state};
    }
}