import React from 'react'
import Header from './components/Header'
import './App.css'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TranscationList from './components/TranscationList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
export default function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TranscationList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  )
}
