import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const [balValue, setBalValue] = useState(0.00)

  useEffect(() => {
    const amount = transactions.map((unit, id) => unit.amount)
    const balTotals = amount.reduce((prev, curr) => prev += curr)
    setBalValue(balTotals)
  }, [balValue])

  return (
    <div>
      <h2>Your Balance</h2>
      <p>{`$ ${balValue.toFixed(2)}`}</p>
    </div>
  )
}

export default Balance
