import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/balance'
import IncomeExpenses from './components/incomeandexp'
import NewTransactions from './components/newtrans'

function App() {
  
 
  return (
    <>
      <Header/>
      <Balance/>
      <NewTransactions />
    </>
  )
}

export default App
