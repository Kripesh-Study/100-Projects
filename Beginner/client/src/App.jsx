import React,{useEffect, useState} from 'react';
import Display from './components/Display';
import PasswordRequirements from './components/PasswordRequirements';
import Generate from './components/Generate';

const App = () => {
    const [rangeNumber, setRangeNumber] = useState(1)
    const [inputValue,setInputValue] = useState("")
    const [clicked, setClicked] = useState(false)
    const [charsUsed, setCharsUsed] = useState({lowerCase:true,upperCase:false,number:false,symbol:false})
    const generatePassword = (pwdLength = rangeNumber, charsUsed) => {
    // Build a pool of characters based on selected options
    const lowerAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_-+=.';
    let pool = '';
    if (charsUsed.lowerCase) pool += lowerAlphabets;
    if (charsUsed.upperCase) pool += upperAlphabets;
    if (charsUsed.number) pool += numbers;
    if (charsUsed.symbol) pool += symbols;

    // Fallback to lower case if no option selected
    if (!pool) pool = lowerAlphabets ;

    let pwd = '';
    for (let i = 0; i < pwdLength; i++) {
      const randomIndex = Math.floor(Math.random() * pool.length);
      pwd += pool[randomIndex];
    }
    setInputValue(pwd);
  };
  useEffect(() => {
    generatePassword(rangeNumber, charsUsed);
  }, [rangeNumber, charsUsed, clicked]);

  return (
    <div className='flex justify-center'>
      <div className='flex items-center flex-col max-w-[90%] w-180 mt-10 gap-15'>
      <Display inputValue={inputValue} setInputValue={setInputValue} />
      <PasswordRequirements rangeNumber={rangeNumber} setCharsUsed={setCharsUsed} setRangeNumber={setRangeNumber} charsUsed={charsUsed} />
      <Generate setClicked={setClicked} />
    </div>
    </div>
  );
};

export default App;