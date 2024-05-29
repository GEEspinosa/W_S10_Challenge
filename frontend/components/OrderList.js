import React from 'react'
import { useSelector } from 'react-redux'
//import {useGetOrdersQuery} from '../state/OrdersApi'

export default function OrderList() {
  //const {data: orders} = useGetOrdersQuery()
  
  
  
  const orders = useSelector(st => st.orderList.orders)
  
  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        
      {
        // console.log(orders)
          orders.map(() => {
            return (
              <li key={1}>
                <div>
                  order details here
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




