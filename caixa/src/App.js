import React, {useState} from 'react'
import './App.css';


function App() {

  const [saque, setSaque] = useState(0)
  const [deposito, setDeposito] = useState(0)
  const [base, setBase] = useState(0)







  return (
    <>
    <section>

    <label>Saque</label>
        <input onChange={(a) => (setSaque(a.target.value))}/><br/>
        <label>Deposito</label>
        <input  onChange = {(a) => (setDeposito(a.target.value))}/>
  
    <p>Valor maximo do banco: {parseFloat(deposito-saque)}</p>
    </section>
    </>
  );
}

export default App;
