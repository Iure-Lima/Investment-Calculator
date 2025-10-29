import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Results from './components/Result/Results'
import UserInput from './components/UserInput/UserInput'

function App() {
  const [data, setData] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>, inputIdentifier: string) => {
    setData((oldData) => {
      return {
        ...oldData,
        [inputIdentifier]: Number(event.target.value)
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput data={data} handleChangeInput={handleChangeInput}/>
      <Results results={data}/>
    </>
  )
}

export default App
