import Header from './components/Header/Header.jsx';
import UserInput from './components/UserInput/UserInput.jsx';
import { useState } from 'react';
import Results from './components/Results/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0 && userInput.expectedReturn > 0;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className={'center'}>Invalid input</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
