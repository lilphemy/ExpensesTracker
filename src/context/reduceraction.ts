import React from 'react'

type transPecifics = [
    {id: number, text: string, amount: number},
    {id: number, text: string, amount: number},
    {id: number, text: string, amount: number},
    {id: number, text: string, amount: number},
]

interface reducerAction {
  type: string,
  payload?: any,
}

const reduceraction = (state: transPecifics, action: reducerAction) => {
  
  switch (action.type) {
    case "TOTAL BALANCE":
      
    default:
        return state
  }
}

export default reduceraction
