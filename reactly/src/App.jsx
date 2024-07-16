import React, { useState } from 'react';
import './App.css';
import './index'
import { useSelector } from 'react-redux';
import store from './redux/store';

function App() {
  const [valueInput, setValueInput] = useState('');

  const cash = useSelector((state) => state.cash);

  const addCash = () =>{
    store.dispatch({type: 'ADD_CASH', playload: Number(valueInput)})
  }
  const getCash = () => {
    store.dispatch({type: 'GET_CASH', playload: Number(valueInput)})
  }

  return (
      <main>
        <article className='contentCash'>
          <label>Введите сумму (₽):</label>
          <input type="number" value={valueInput} onChange={event => setValueInput(event.target.value)}/>
          <section className='btnSection'>
            <button onClick={() => addCash()}>Пополнить</button>
            <button onClick={() => getCash()}>Снять</button>
          </section>
          <section className='balanceSection'>
            <p>Баланс ₽: <span>{cash}</span></p>
            <br />
            <p>Баланс $: <span>{(cash / 88.37).toFixed(2)}</span></p>
          </section>
        </article>
      </main>
  );
}

export default App;
