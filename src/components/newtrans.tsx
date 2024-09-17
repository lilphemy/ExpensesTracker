import React, { useState, useContext, Fragment } from "react";
import { GlobalContext } from "../context/GlobalState";

const NewTransactions = () => {
    const [detail, setDetail] = useState ({ id: 0, text: '', amount: 0})
    //const [history, setHistory] = useState<dataObj[]>([])
    const {addTransaction} = useContext(GlobalContext)

    function handleInput (e: React.ChangeEvent<HTMLInputElement> ) {
        const name = e.target.name;
        const value = e.target.value;
        setDetail({...detail, [name]:value})
        console.log(detail)
    }

    const handleSubmit= function (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newExpen = {...detail, id: new Date().getMilliseconds()}
        addTransaction?.(newExpen)
    }

    return (
        <Fragment>
            <section>  
                <div className="w-ful">
                    <h3 className = 'w-full text-left border-b border-base-300 p-2 my-3 font-sans font-bold text-lg'>Add new Transaction</h3>
                </div>
                <form className = 'w-full' onSubmit={() => handleSubmit}>
                    <ul className = 'w-full'>
                        <li className="flex flex-col w-full my-1 p-0.5">
                            <label htmlFor="text" className = "my-0.5 text-left  font-normal text-lg text-tomato-300 w-full">Text</label>
                            <input type="text" className = 'w-full p-1 border-none outline-none text-xl' name="text" value = {detail.text} onChange = {handleInput}/>
                        </li>

                        <li className="flex flex-col w-full my-1 p-0.5">
                            <label htmlFor="text" className = "my-0.5 text-left  font-normal text-lg text-tomato-300 w-full">amount</label>
                            <input type="number" className = 'w-full p-1 border-none outline-none text-xl' name="amount" value = {detail.amount} onChange = {handleInput}/>
                        </li>
                    </ul>
                    <button className="w-full bg-purple-700 p-1 text-small font-serif text-white">Add Transaction</button>
                </form>
            </section>
        </Fragment>
    )
}

export default NewTransactions