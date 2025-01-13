import Card from './Card'
import './intervalo.css'
import React from 'react'

export default props => {
    const {mix, max} = props
    return (
        <Card title="Intervalo de Numeros" red>
           <div className='Intervalo'>
            <span>
                <strong>Minimo</strong>
                <input type="number" value={min} onChange={e => props.onMinChanged(+e.target.value)} />
            </span>
            <span>
                <strong>Maximo</strong>
                <input type="number" value={max} onChange={e=> props.onMaxChanged(+e.target.value)} />
            </span>
            </div>
        </Card>
    )
}