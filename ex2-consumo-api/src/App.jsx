import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [price, setPrice] = useState('R$ 0');
  const [coin, setCoin] = useState('BTC');

  const moedas = ['BTC', 'ETH', 'DOGE']

  const url = `https://www.mercadobitcoin.net/api/${coin}/ticker/`;
  const handleClickSearch = async () => {
    const {data}= await axios.get(url);
    if(data.ticker){
      setPrice(parseFloat(data.ticker.last).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'}))
    }
  }

  useEffect(()=>{
    handleClickSearch()
  }, [coin])

  const handleSelectChange = async (e) => {
    setCoin(e.target.value);

  }

  return (
    <div className='App'>
    <h2>Preço atual do {coin}: {price}</h2>
    <select onChange={handleSelectChange}>
      {moedas.map((moeda) => <option key={moeda} value={moeda} >{moeda}</option> )}
    </select>
    <br />
    <button onClick={handleClickSearch} >Pesquisar</button>

    </div>
  )
}

export default App
