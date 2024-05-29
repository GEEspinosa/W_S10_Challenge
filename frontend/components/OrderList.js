import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {switchSizeFilter} from '../state/OrderListSlice'
import {useGetOrdersQuery} from '../state/OrdersApi'

export default function OrderList() {
  const { data: orders  } = useGetOrdersQuery();
  const sizeFilter = useSelector(st => st.orderList.orderFilterSelector)
  const dispatch = useDispatch()






  
  

  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        
      {orders?.filter(or => {
            if (sizeFilter === 'All') {return or}
            else {return or.size === sizeFilter}
          }).map((order, key) => {
          console.log(order.length)
          return (
            <li key={key}>
              <div>
                {`${order?.customer}`}  
                {' ordered a size '} 
                {`${order?.size}`}  
                {' with ' }
                {`${order?.toppings?.length ? order?.toppings?.length : 'no'}`} 
                {' topping'} 
                {`${order?.toppings?.length !== 1 ? 's' : ''}`}
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
              onClick = {() => dispatch(switchSizeFilter(size))}
              value = {size}
              key={size}>{size}</button>
          })
        }
      </div>
    </div>
  )
}




