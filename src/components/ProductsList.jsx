// import React from 'react'
import { Product } from './Product'


export const ProductsList = ({array}) => {
  return (
    <div>
        {array.map((el) => <li key={el.id}>{<Product name={el.name} price={el.price} description={el.description} />}</li>)}
    </div>
  )
}
