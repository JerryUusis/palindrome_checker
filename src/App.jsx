import { useState } from 'react'
import Title from './components/Title'
import TextField from './components/TextField'
import Output from './components/Output'
import Button from './components/Button'


function App() {
  const [output, setOutput] = useState("")
  const [inputText, setInputText] = useState("")

  const handleInput = (event) => {
    setInputText(event.target.value)
  }

  const checkPalindrome = (inputText) => {
    let emptyWord = ""

    for (let i = inputText.length - 1; i >= 0; i--) {
      emptyWord += inputText[i]
    }

    if (emptyWord.toLowerCase() === inputText.toLowerCase()) {
      setOutput(`${inputText} is a palindrome`)
    } else {
      setOutput(`${inputText} is not a palindrome`)
    }

  }

  return (
    <>
      <Title />
      <TextField handleInput={handleInput} />
      <Button handleClick={() => checkPalindrome(inputText)} />
      <Output output={output} />
    </>
  )
}

export default App
