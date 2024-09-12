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
    case "DELETE":
      
    default:
        return state
  }
}

export default reduceraction
