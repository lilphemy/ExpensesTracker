import React, { Fragment, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import Transaction from './transaction' 

interface dataUnit {
    id: number,
    text: string,
    amount: number
}

const History = () => {
    const dataContext = useContext(GlobalContext)
    //console.log(dataContext)

    return (
        <Fragment>
            <section>
                <div>
                    <h3>History</h3>
                    <ul>
                        {dataContext.transactions.map((unitTrans: dataUnit) => {
                            //const {id, text, amount} = dataUnit;
                            return <Transaction key = {unitTrans.id} transData = {unitTrans}/>
                        })}
                    </ul>
                </div>
            </section>
        </Fragment>
    )
}

export default History