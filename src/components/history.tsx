import React, { Fragment, useContext } from 'react';
import {GlobalContext} from '../context/GlobalState'

const History = () => {
    const dataContext = useContext(GlobalContext)
    console.log(dataContext)
    
    return (
        <Fragment>
            <section>
                <div>
                    <h3>History</h3>
                    <ul>
                        <li>cash <span>-$400</span></li>
                    </ul>
                </div>
            </section>
        </Fragment>
    )
}

export default History