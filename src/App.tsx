import { useState } from 'react'
import Header from './components/Header'
import Balance from './components/balance'
import IncomeExpenses from './components/incomeandexp'
import History from './components/history'
import NewTransactions from './components/newtrans'
import GlobalProvider from './context/GlobalState'

function App() {


  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpenses />
      <History/>
      <NewTransactions />
    </GlobalProvider>
  )
}

export default App
