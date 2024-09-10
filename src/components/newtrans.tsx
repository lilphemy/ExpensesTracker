import React, { useState, useEffect, Fragment } from "react";


type dataObj = {
    id: string,
    text: string,
    amount: string,
}
const NewTransactions = () => {
    const [detail, setDetail] = useState ({ id: '', text: '', amount: ''})
    const [history, setHistory] = useState<dataObj[]>([])

    function handleInput (e: React.ChangeEvent<HTMLInputElement> ) {
        const name = e.target.name;
        const value = e.target.value;
        setDetail({...detail, [name]:value})
        console.log(detail)
    }

    const handleSubmit= function (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newExpen = {...detail, id: new Date().getMilliseconds().toString(),}
        setHistory([...history, newExpen])
        setDetail({id: '', text: '', amount: '',})
        console.log(history)
    }

    return (
        <Fragment>
            <section>  
                <div>
                    <h3>Add new Transaction</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label htmlFor="text">Text</label>
                            <input type="text" name="text" value = {detail.text} onChange = {handleInput}/>
                        </li>
                        <li>
                            <label htmlFor="text">amount</label>
                            <input type="number" name="amount" value = {detail.amount} onChange = {handleInput}/>
                        </li>
                    </ul>
                    <button>form data</button>
                </form>
            </section>
        </Fragment>
    )
}

export default NewTransactions