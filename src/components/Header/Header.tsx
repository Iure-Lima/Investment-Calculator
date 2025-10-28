import "./Header.css"
import Logo from "../../assets/investment-calculator-logo.png"

function Header(){
  return <>
    <header>
      <img src={Logo} alt="Investment Calculator" />
      <h1>Investment Calculator</h1>
    </header>
  </>
}

export default Header;