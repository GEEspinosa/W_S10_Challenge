import React from 'react'
//import { useSelector } from 'react-redux'
import {useGetOrdersQuery} from '../state/OrdersApi'

export default function OrderList() {
  const { data: orders, error, isLoading,  } = useGetOrdersQuery();



 


console.log(orders)
  
  
  
  //const orders = useSelector(st => st.orderList.orders)
  
  //const orders = [{id: 1, customer: 'Cher', size: 'M', toppings: []}]

  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        
      {orders?.map((order, key) => {
          return (
            <li key={key}>
              <div>
                {`${order.customer} ordered a size ${order.size} with ${order.toppings.length ? order.toppings.length : 'no'} ${order.toppings.length > 1 || order.toppings.length === 0 ? 'toppings' : 'topping'}`}
              </div>
            </li>
          )
        })
      }
     

            
     
        
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L'].map(size => {
            const className = `button-filter${size === 'All' ? ' active' : ''}`
            return <button
              data-testid={`filterBtn${size}`}
              className={className}
              key={size}>{size}</button>
          })
        }
      </div>
    </div>
  )
}




