import React from 'react'

type transPecifics = [
    {id: number, text: string, amount: number},
    {id: number, text: string, amount: number},
    {id: number, text: string, amount: number},
    {id: number, text: string, amount: number},
]

type reducerType = {type: "DELETE"} | {type: "INCREAMENT"} | {type: 'DECREAMENT'}

interface reducerAction {
  type: string,
  payload?: any,
}

const reduceraction = (state: transPecifics, action: reducerAction) => {
  switch (action.type) {
  
    default:
        return state
  }
}

export default reduceraction
