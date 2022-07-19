import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        {greeting}
        <ItemCount stock={12} initial={1} onAdd={(n) => alert(`Agregaste ${n} productos`)} />
        
    </div>
  )
}

export default ItemListContainer