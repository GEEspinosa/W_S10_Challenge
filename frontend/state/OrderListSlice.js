import { createSlice } from '@reduxjs/toolkit'


export const orderListSlice = createSlice ({
    name: 'orderList',
    initialState: {
        orderFilterSelector: 'All',
    },
    reducers: {
        switchSizeFilter(state, action){
            state.orderFilterSelector = action.payload
            console.log(action.payload)
        }
    }
})

export const {
    switchSizeFilter
}  = orderListSlice.actions


export default orderListSlice.reducer