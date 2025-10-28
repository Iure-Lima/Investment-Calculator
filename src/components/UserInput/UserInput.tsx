import { useState } from "react";
import "./UserInput.css";

function UserInput() {
  const [data, setData] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectReturn: 6,
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
      <section id="user-input">
        <div className="input-group">
          <p>
            <label> INITIAL INVESTMENT</label>
            <input type="number" value={data.initialInvestment} required onChange={(event) => handleChangeInput(event, "initialInvestment")}/>
          </p>

          <p>
            <label>ANNUAL INVESTMENT</label>
            <input type="number" value={data.annualInvestment} required onChange={(event) => handleChangeInput(event, "annualInvestment")}/>
          </p>
        </div>

        <div className="input-group">
          <p>
            <label>EXPECTED RETURN</label>
            <input type="number" value={data.expectReturn} required onChange={(event) => handleChangeInput(event, "expectReturn")}/>
          </p>

          <p>
            <label>DURATION</label>
            <input type="number" value={data.duration} required onChange={(event) => handleChangeInput(event, "duration")}/>
          </p>
        </div>
      </section>
    </>
  );
}

export default UserInput;
