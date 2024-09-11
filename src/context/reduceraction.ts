import React from 'react'

type transPecifics = [
    {id: number, text: string, amount: number},
    {id: number, text: string, amount: number},
    {id: number, text: string, amount: number},
    {id: number, text: string, amount: number},
]

type reducerType = {type: "DELETE"} | {type: "INCREAMENT"} | {type: 'DECREAMENT'}

const reduceraction = (state: transPecifics, action: reducerType) => {
  switch (action.type) {
    case "DELETE":
        return undefined
    default:
        return state
  }
}

export default reduceraction
