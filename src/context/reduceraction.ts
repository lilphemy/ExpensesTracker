import React from 'react'

// type transPecifics = [
//     {id: number, text: string, amount: number},
//     {id: number, text: string, amount: number},
//     {id: number, text: string, amount: number},
//     {id: number, text: string, amount: number},
// ]

interface callData {
  transactions: [
      {id: number, text: string, amount: number},
      {id: number, text: string, amount: number},
      {id: number, text: string, amount: number},
      {id: number, text: string, amount: number},
  ]
}

interface reducerAction {
  type: string,
  payload?: number,
}

const reduceraction = (state: callData, action: reducerAction) => {

  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(value => value.id != action.payload)
      }
    default:
        return state
  }
}

export default reduceraction
