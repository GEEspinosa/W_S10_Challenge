import React, {useReducer} from 'react'
import { useCreateOrderMutation } from '../state/OrdersApi'

const CHANGE_INPUT = 'CHANGE_INPUT'
const RESET_FORM = 'RESET_FORM'

const initialFormState = { // suggested
  fullName: '',
  size: '',
  toppings: []
 
}

const reducer = (state, action) => {

  switch (action.type) {
    case CHANGE_INPUT: {
      const {name, value} = action.payload
      return { ...state, [name]: value }
    }

    case RESET_FORM:
      return { initialFormState }

    default:
      return state
  }
}

export default function PizzaForm() {
  const [createOrder] = useCreateOrderMutation()
  const [state, dispatch] = useReducer(reducer, initialFormState)
  
  const onChange = evt => {
    const {name, value} = evt.target
    if (evt.target.type === 'checkbox') {
      if (evt.target.value === 'on') {
        state.toppings.push(evt.target.name)
      }
    }
    dispatch({type: CHANGE_INPUT, payload: {name, value}})
  }

  const resetForm = () => {
    dispatch ({type: RESET_FORM})
  }


  const onNewOrder = evt => {
    evt.preventDefault()
    createOrder(state)
    resetForm()
  }
  
  
  
  
  return (
    <form onSubmit ={onNewOrder} >
      <h2>Pizza Form</h2>
      {true && <div className='pending'>Order in progress...</div>}
      {true && <div className='failure'>Order failed: fullName is required</div>}

      <div className="input-group">
        <div>
          <label htmlFor="fullName">Full Name</label><br />
          <input
            data-testid="fullNameInput"
            id="fullName"
            name="fullName"
            placeholder="Type full name"
            type="text"
            onChange = {onChange}
            value = {state.fullName}
            
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="size">Size</label><br />
          <select data-testid="sizeSelect" id="size" name="size" onChange = {onChange}  >
            <option value="">----Choose size----</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>
          <input data-testid="checkPepperoni" name="1" type="checkbox" onChange = {onChange} />
          Pepperoni<br /></label>
        <label>
          <input data-testid="checkGreenpeppers" name="2" type="checkbox" onChange = {onChange}/>
          Green Peppers<br /></label>
        <label>
          <input data-testid="checkPineapple" name="3" type="checkbox" onChange = {onChange}/>
          Pineapple<br /></label>
        <label>
          <input data-testid="checkMushrooms" name="4" type="checkbox" onChange = {onChange}/>
          Mushrooms<br /></label>
        <label>
          <input data-testid="checkHam" name="5" type="checkbox" onChange = {onChange} />
          Ham<br /></label>
      </div>
      <input data-testid="submit" type="submit" />
    </form>
  )
}
