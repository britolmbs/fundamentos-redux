import { NUM_MIN, NUM_MAX} from "../actions/actionsTypes"

const InitialState ={
    min: 1,
    max: 10
}

export default function(state = InitialState, action){
    switch(action.type) {
     case NUM_MIN:
     return {
         ...state,
         min: action.payload
     }
     case NUM_MAX:
         return{
             ...state,
             max: action.payload
         }

     default: 
     return state
    }
 
 }