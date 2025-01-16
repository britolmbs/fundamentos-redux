import { connect } from 'react-redux'
import Card from './Card'
import './intervalo.css'
import React from 'react'
import { alterarNumeroMinimo } from '../store/actions/numeros';

function Intervalo(props){
    const {mix, max} = props;
    props.alterarMinimo(100)

    return (
        <Card title="Intervalo de Numeros" red>
           <div className='Intervalo'>
            <span>
                <strong>Minimo</strong>
                <input type="number" value={min} readOnly  />
            </span>
            <span>
                <strong>Maximo</strong>
                <input type="number" value={max} readOnly />
            </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

function mapActionCreatorsToProp(dispatch) {
    return{
        alterarMinimo(novoNumero){
          const action = alterarNumeroMinimo(novoNumero)
          dispatch(action)
        }
    }
}

export default connect(mapStateToProps,
     mapActionCreatorsToProp)
     (Intervalo);