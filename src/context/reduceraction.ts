import React from 'react'

interface dataUnit {
  id: number,
  text: string,
  amount: number
}

type transPecifics = [
    {id: number, text: string, amount: number},
    {id: number, text: string, amount: number},
    {id: number, text: string, amount: number},
    {id: number, text: string, amount: number},
]

type callData = {
  transactions: ({ id: number; text: string; amount: number})[]
}

type reducerAction = {type: 'ADD_TRANSACTION', payload: dataUnit} | {type: 'DELETE_TRANSACTION', payload: number} 

const reduceraction = (state: callData, action: reducerAction):callData => {

  switch (action.type) {

    case "DELETE_TRANSACTION":
      
      return {
        ...state,
        transactions: state.transactions.filter(value => value.id != action.payload)
      }
      case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [{...action.payload, id: Number(new Date())}, ...state.transactions]
      }
    default:
      return state
  }
}

export default reduceraction
