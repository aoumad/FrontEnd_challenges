import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [color, setColor] = useState<string>('black');
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string>('');
  const [render, setRender] = useState<number>(0);
  // var correct_color : string = '';

  const getRandomColor = () => {

    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    const color = new Array(6)
    .fill('')
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join('');

    return (`#${color}`);

  }
  useEffect(() => {
    // change the color functionlity
    const correct_color = getRandomColor();
    setColor(correct_color);
    setAnswers([getRandomColor(), correct_color, getRandomColor()].sort(() => 0.5 - Math.random()));
  }, [render]);

  setTimeout(() => {
    if (result === 'true')
    setResult('');
  }, 200)

  const handleCheckColor = (answer: string) => {
    if (answer === color)
    {
      setResult("true");
      setRender((render + 1));
    }
    else
      setResult("false")
  }
  return (
    <div className="App">
      <div className="App-header">
        <div className='rectangle'
          style={{background: color}}
          >
        </div>
        <div className='button-container'>
        {answers.map(answer => (
            <button
              key={answer}
              className='button'
              onClick={() => handleCheckColor(answer)}
              >{answer}</button>
              ))}
            </div>
        {result === 'true' && <div className='result-correct'>Correct Answer</div>}
        {result === 'false' && <div className='wrong-result'>Wrong Answer</div>}
      </div>

    </div>
  );
}

export default App;
