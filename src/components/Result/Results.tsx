import { calculateInvestmentResults, formatter } from "../../util/investment"
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
  const initialInvestment  = computedData[0].valueEndOfYear - computedData[0].interest - computedData[0].annualInvestment
  return <>
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {computedData.map((result) => {
          const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
          const investedCapital = result.valueEndOfYear - totalInterest
          return (
            <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(investedCapital)}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
  </>
}

export default Results