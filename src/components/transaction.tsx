import React, {Fragment, useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortAwesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../context/GlobalState'


interface dataUnit {
    id: number,
    text: string,
    amount: number
}

const Transaction = ({transData}: {transData: dataUnit}) => {
  const [bool, setBool] = useState(true);
  const {deleteTrans} = useContext(GlobalContext)
  const {text, amount} = transData
  const sign = amount < 0? "-" : "+";
  return (
    <Fragment>
      {bool && <FontAwesomeIcon onClick = {() => deleteTrans?.(transData.id)} icon={faCoffee}/>}
      <li>{text} <span>{sign}{Math.abs(amount)}</span></li>
    </Fragment>
  )
}

export default Transaction
