import React, { useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
export default function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
const onSubmit = e => {
  e.preventDefault();
  
  const newTransaction = {
    id: Date.now(),
    text,
    amount: +amount
  }
  addTransaction(newTransaction);
  setText('')
  setAmount()
}

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder='Enter text..' />
        </div>
        <div className='form-control'>
            <label htmlFor='amount'>
                Amount <br/>
                negative - expense, positive - income
            </label>
            <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}  placeholder='Enter amount' />

        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}
