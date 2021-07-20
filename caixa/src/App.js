import React, {useState} from 'react'
import Caixa from './componentes/caixa'
import Operacao from './componentes/operacao'
import './App.css';

function App() {

  const [saque, setSaque] = useState(0)
  const [deposito, setDeposito] = useState(0)
  const [base, setBase] = useState(100000)


  const comparaOperacao = () => {
    if (saque == 0 && deposito == 0){

      return "Nada Operado";

    }

    else if(saque != 0 && deposito != 0){

      return "Invalido";

    }

    else {

      return "Operando";

    }
  }

  return (
    <>

    <section className="interface">

        <div className="interface_div">
          <Caixa label = "Saque" valor = {saque} setOperacao = {setSaque} />
          <Caixa label = "Deposito" valor = {deposito} setOperacao = {setDeposito} />
          <Operacao
          compara = {comparaOperacao}
          setSaque = {saque}
          setDeposito = {deposito}
          setBase = {parseFloat(base) + parseFloat(deposito) - parseFloat(saque)}/>
        </div>

    </section>
    </>
  );
}

export default App;