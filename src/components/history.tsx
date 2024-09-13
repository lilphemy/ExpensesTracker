import React, { Fragment, useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './transaction'

interface dataUnit {
    id: number,
    text: string,
    amount: number
}

const History = () => {
    const {transactions} = useContext(GlobalContext)
    const [bool, setBool] = useState<boolean>(true)
    //console.log(dataContext)

    return (
        <Fragment>
            <section>
                <div>
                    <h3>History</h3>
                    <ul>
                        {transactions.map((singData) => {
                            const {id} = singData
                            return (
                                <article key={id}>
                                    <Transaction transData={singData}/>
                                </article>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </Fragment>
    )
}

export default History