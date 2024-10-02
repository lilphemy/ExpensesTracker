import { Fragment, useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortAwesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../context/GlobalState'


interface dataUnit {
  id: number,
  text: string,
  amount: number
}

const Transaction = ({ transData }: { transData: dataUnit }) => {
  const [bool, setBool] = useState(false);
  const { deleteTrans } = useContext(GlobalContext)
  const { text, amount } = transData;
  const sign = amount < 0 ? "-" : "+";

  function toggleBool() {
    setBool((prev) => !prev)
  }

  return (
    <Fragment>
      {bool && <FontAwesomeIcon onClick={() => deleteTrans?.(transData.id)} icon={faCircleXmark} style={{height: "20px", width: "80px", color: "tomato", textAlign: "center", padding: "0"}} />}
      <div className='w-full border border-neutral-400 text-left'>
        <li className='w-full  p-1 flex flex-row justify-between' onMouseLeave={toggleBool} onMouseEnter={toggleBool}><p>{text}</p> <span className=''>{sign}{Math.abs(amount)}</span></li>
      </div>
    </Fragment>
  )
}

export default Transaction

//<div style={{width: "10%", height: "100%", textAlign: "center", padding: '5px', marginLeft: "5px", border: "2px 2px solid green"}}></div>