import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial)
    const agregar = () => {
        setCount(count + 1)
    }
    const quitar = () => {
        setCount((valAnt) => (valAnt > 0 ? count - 1 : count))
    }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={quitar}>-</button>
        <button onClick={agregar}>+</button>
        <button onClick={() => {
            if (count <= stock) {
                onAdd(count)
            }
            else {
                alert('No tenemos suficientes productos')
            }
        }}>
            Agregar a mi carrito
        </button>
    </div>
  )
}

export default ItemCount