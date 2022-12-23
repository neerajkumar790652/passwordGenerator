import React,{useState} from 'react';
import './App.css';
import{numbers,upperCaseLetter,lowerCaseLetter,specialCharacters} from './Characters';

function App() {
  const [password,setPassword] = useState('');
  const [passwordLength,setPasswordLength] = useState(20);
  const [includeUppercase,setIncludeUppercase]=useState(false);
  const [includeLowercase,setIncludeLowercase] =useState(false);
  const [includeNumber,setIncludeNumber] =useState(false);
  const [includeSymbol,setIncludeSymbol]=useState(false);

  const handleGeneratePassword = (e)=>{
    let characterList =''
    if(includeLowercase){
      characterList =characterList + lowerCaseLetter;
    }
    if(includeUppercase){
      characterList = characterList + upperCaseLetter;
    }
    if(includeNumber){
      characterList = characterList+numbers;
    }
    if(includeSymbol){
      characterList = characterList+specialCharacters;
    }
    setPassword(createPassword(characterList))

  }
  const createPassword =(characterList)=>{
   let password ='';
   const characterListLength = characterList.length

   for(let i = 0;i<passwordLength;i++){
    const characterIndex = Math.round(Math.random()*characterListLength)
    password =password+characterList.charAt(characterIndex);
   }
   return password
  }
  const copyToClipboard=()=>{
    const newTextArea= document.createElement('textarea') 
     newTextArea.innerText =password;
     document.body.appendChild(newTextArea)
     newTextArea.select()
     document.execCommand('copy');
     newTextArea.remove() 
  }
  const handleCopyPassword=(e)=>{
    copyToClipboard()
  }


  return (
    <div className="App">
     <div className="container">
      <div className="generator">
        <h1 className="generator_header">Password Generator</h1>
        <div className="generator_password">
          <h3>{password}</h3>
          <button className="copy_btn" onClick={handleCopyPassword}>
            <i className='far fa-clipboard'></i>
          </button>
        </div>
        <div className='form-group'>
          <label htmlFor="password-strength">Select Password length</label>
          <input defaultValue={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)} type="number" id="password-strength" name="password-strength" max="20" min="8"></input>
        </div>
        <div className='form-group'>
          <label htmlFor="uppercase-letter">Include Uppercase letters</label>
          <input checked={includeUppercase} onChange={(e)=>setIncludeUppercase(e.target.checked)} type="checkbox" id="uppercase-letter" name="uppercase-letter" ></input>
        </div>
        <div className='form-group'>
          <label htmlFor="lowercase-letter">Include Lowercase letters</label>
          <input checked={includeLowercase} onChange={(e)=>setIncludeLowercase(e.target.checked)} type="checkbox" id="lowercase-letter" name="lowercase-letter" ></input>
        </div>
        <div className='form-group'>
          <label htmlFor="number">Include Numbers</label>
          <input checked={includeNumber} onChange={(e)=>setIncludeNumber(e.target.checked)} type="checkbox" id="number" name="number" ></input>
        </div>
        <div className='form-group'>
          <label htmlFor="symbol">Include Symbols</label>
          <input checked={includeSymbol} onChange={(e)=>setIncludeSymbol(e.target.checked)} type="checkbox" id="symbol" name="symbol" ></input>
        </div>
        <button className="generator-btn" onClick={handleGeneratePassword}>Generator Password</button>
      </div>
     </div>
    </div>
  );
}

export default App;
