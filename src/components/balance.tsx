import { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const [balValue, setBalValue] = useState(0.00)

  useEffect(() => {
    const amount = transactions.map((unit) => unit.amount)
    const balTotals = amount.reduce((prev, curr) => prev += curr)
    setBalValue(balTotals)
  }, [balValue])

  return (
    <article className = 'w-full text-left font-sarif font-bold text-3xl py-4'>
      <h2>Your Balance</h2>
      <p>{`$ ${balValue.toFixed(2)}`}</p>
    </article>
  )
}

export default Balance
