import Header from './components/Header'
import Balance from './components/balance'
import IncomeExpenses from './components/incomeandexp'
import History from './components/history'
import NewTransactions from './components/newtrans'
import GlobalProvider from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
      <main className = 'w-80 m-auto p-0 m-0 mt-10 box-border text-center'>
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
