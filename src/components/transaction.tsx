import React from 'react'


interface dataUnit {
    id: number,
    text: string,
    amount: number
}

const Transaction = ({transData}: {transData: dataUnit}) => {
    const {text, amount} = transData
    const sign = amount < 0? "-" : "+";
  return (
    <li>{text} <span>{sign}{Math.abs(amount)}</span></li>
  )
}

export default Transaction
