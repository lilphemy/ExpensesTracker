import React, { Fragment, useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortAwesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons/faCoffee';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './transaction'

interface dataUnit {
    id: number,
    text: string,
    amount: number
}

const History = () => {
    const dataContext = useContext(GlobalContext)
    const [bool, setBool] = useState<boolean>(false)
    //console.log(dataContext)

    return (
        <Fragment>
            <section>
                <div>
                    <h3>History</h3>
                    <ul>
                        {dataContext.transactions.map((singData) => {
                            const {id} = singData
                            return (
                                <article key={id}>
                                    {bool && <FontAwesomeIcon icon={faCoffee}/>}
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