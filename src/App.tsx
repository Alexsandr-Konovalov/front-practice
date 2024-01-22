import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  const [clicks, setClicks] = React.useState(0);

  function increaseClicks() {
    setClicks(clicks + 1);
    }
  function resetClicks() {
    setClicks(0);
  }
  return (
    <div className="App">
      <header className="App-header">
      <RedButton onClick={increaseClicks}>НЕ НАЖИМАТЬ!</RedButton>
      <Counter>и всё же ты нажал {clicks} раз</Counter>
      <ResetButton onClick={resetClicks}>Сброс</ResetButton>
      </header>
    </div>
  );
}

export default App;

const RedButton = styled.button ({
  height: 200,
  width: 200,
  backgroundColor: '#E80000',
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: 700,
  borderRadius: '50%',
  border: '3px solid #FFFFFF',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#F80000',
  },

  '&:active': {
    backgroundColor: '#D80000',
  },

});
const ResetButton = styled.button ({
  height: 50,
  width: 300,
  backgroundColor: '#30d5c8',
  color: '#000000',
  fontSize: 16,
  fontWeight: 700,
  borderRadius: '10%',
  border: '3px solid #000',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#800080',
  },

  '&:active': {
    backgroundColor: '#660066',
  },

});

const Counter = styled.p({
  fontSize: 24,
  color: '#FFFFFF',
});