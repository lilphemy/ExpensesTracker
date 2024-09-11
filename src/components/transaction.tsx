import React from 'react'


interface dataUnit {
    id: number,
    text: string,
    amount: number
}

const Transaction = ({transData}: {transData: dataUnit}) => {
    const {id, text, amount} = transData
  return (
    <li>{text} <span>{amount}</span></li>
  )
}

export default Transaction
