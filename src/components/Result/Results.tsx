import "./Results.css"

interface Props{
  results: {
    initialInvestment: number,
    annualInvestment: number,
    expectReturn: number,
    duration: number
  }
}

function Results({results}: Props){
  return <>
    <p id="result">Results {results.annualInvestment}</p>
  </>
}

export default Results