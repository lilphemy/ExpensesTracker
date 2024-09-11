import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/balance'
import IncomeExpenses from './components/incomeandexp'
import NewTransactions from './components/newtrans'
import GlobalProvider from './context/GlobalState'

function App() {


  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <NewTransactions />
    </GlobalProvider>
  )
}

export default App
