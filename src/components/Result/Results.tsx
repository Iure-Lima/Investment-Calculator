import { calculateInvestmentResults } from "../../util/investment"
import "./Results.css"

interface Props{
  results: {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  }
}

function Results({results}: Props){
  const computedData = calculateInvestmentResults(results)
  console.log(computedData)
  return <>
    <p id="result">Results</p>
  </>
}

export default Results