import { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const [balValue, setBalValue] = useState(0.00)

  useEffect(() => {
    const amount = transactions.map((unit) => unit.amount)
    const balTotals = amount.length > 0 ? amount.reduce((prev, curr) => {
      return prev += curr
    }) : 0;
    setBalValue(balTotals)
  }, [transactions])

  return (
    <article className = 'w-full text-left font-sarif font-bold text-3xl py-4'>
      <h2>Your Balance</h2>
      <p className = {balValue >= 0 ? "text-teal-700" : "text-rose-600"}>{`$ ${balValue.toFixed(2)}`}</p>
    </article>
  )
}

export default Balance

