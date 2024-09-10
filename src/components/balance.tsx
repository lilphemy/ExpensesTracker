import React,{useState} from 'react'

const Balance = () => {
    const [balValue, setBalValue] = useState(0.00)
  return (
    <div>
      <h2>Your Balance</h2>
      <p>{`$ ${balValue}`}</p>
    </div>
  )
}

export default Balance
