import { createStore, combineReducers } from 'redux'

<<<<<<< HEAD
const reducers = combineReducers({
    numeros: function(state, action){
        return{
            min: 1,
            max: 10
        }
    },
    
})

function storeConfig() {
    return createStore (reducers)
}

export default storeConfig
=======
const reducers = combineReducers({
    numeros: function(state, action){
        return{
            min: 1,
            max: 10
        }
    },
    
})

function storeConfig() {
    return createStore (reducers)
}

export default
>>>>>>> ff882add58e35c0fbbb716e5c992bddbaaac2b7a