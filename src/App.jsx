import { useState } from "react"
import UserInput from "./Components/UserInput"
import Table from "./Components/Table"

function App() {

  const [ userInput , setUserInput ] = useState({
    initialInvestment : '' ,
    annualInvestment: '' ,
    expectedReturn : '',
    duration : ''
})

function handelUserInput(inputIdentifier , newValue) {
    setUserInput( (prevUserInput) =>  {
        return {
            ...prevUserInput ,
            [inputIdentifier] :  +newValue
        }
    } )
}

let test = userInput.duration <= 0

  return (
    <main>
      <UserInput userInput={userInput} onChange={handelUserInput} />
      {test ? <p className="center" >Please Choose a duration more than ZERO</p> : <Table input={userInput} /> }
    </main>
  )
}

export default App
