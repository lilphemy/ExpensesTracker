import { Fragment, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './transaction'
import { CancelOutlined } from '@mui/icons-material';


// interface dataUnit {
//     id: number,
//     text: string,
//     amount: number
// }

const History = () => {
    const {transactions, deleteTrans} = useContext(GlobalContext);
    return (
        <Fragment>
            <section className='my-5'>
                <div className='w-full text-center '>
                    <h3 className = 'w-full text-left border-b border-base-300 p-2 my-3 font-sans font-bold text-lg'>History</h3>
                    <ul>
                        {transactions.map((singData) => {
                            const {id} = singData
                            return (
                                <article key={id} className='flex flex-row w-full my-5'>
                                    <CancelOutlined sx={{fontSize:'30px', color: 'red'}} onClick={() => {deleteTrans!(id)}}/>
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

