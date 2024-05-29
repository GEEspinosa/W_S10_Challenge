import { createSlice } from '@reduxjs/toolkit'


export const orderListSlice = createSlice ({
    name: 'orderList',
    initialState: {
        orders: [{fullName: 'hi', size: 'S'}]},

})


export default orderListSlice.reducer