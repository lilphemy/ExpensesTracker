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
      <main className = ' w-1/2 m-auto p-0 m-0 box-border text-center border-4 border-sky-500'>
        <Header />
        <Balance />
        <IncomeExpenses />
        <History />
        <NewTransactions />
      </main>
    </GlobalProvider>
  )
}

export default App
