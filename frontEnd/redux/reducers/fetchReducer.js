import { actionTypes } from "../actions/actions";

const initialState = {
    list:[]
};

export const fetchReducer = (state = initialState , action) =>{
    switch (action.type){
        case actionTypes.FETCH_ALL:
            return {
                ...state,
                list:[...action.payload]
            }
            case actionTypes.CREATE:
            return {
                ...state,
                list:[...state.list,action.payload]
            }
            case actionTypes.UPDATE:
            return {
                ...state,
                list:[...state.list.map(x => x._id = action.payload._id ? action.payload : x)]
            }
            case actionTypes.DELETE:
                return {
                    ...state,
                    list:state.list.filter(x => x._id !== action.payload)
                }
            default: 
            return state;
    }

}