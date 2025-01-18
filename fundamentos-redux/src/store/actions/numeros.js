 import {NUM_MIN, NUM_MAX} from './actionsTypes'
 export function alterarNumeroMinimo(novoNumero){
return {
    type: NUM_MIN,
    payload: novoNumero
}
}

export function alterarNumeroMaximo(novoNumero){
    return {
        type: NUM_MAX,
        payload: novoNumero
    }
}