

import { useState, useContext, useEffect, Fragment } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses () {
    const {transactions} = useContext(GlobalContext)
    const [money, setMoney] = useState({income: 0.00, expenses: 0.00}) 

    useEffect(() => {
        const mainAmount = transactions.map((singValue) => singValue.amount)
        const expens = mainAmount.filter((value) => value < 0) 
        const revenue = mainAmount.filter((value) => value > 0)
        setMoney({...money, income: revenue.length > 0 ? revenue.reduce((prev: number, curr: number) => prev += curr) : 0, expenses: expens.length > 0? Math.abs(expens.reduce((prev: number, curr: number) => prev += curr)) : 0})
    }, [transactions])

    return(
        <Fragment>
            <section className = 'w-full m-auto m-0 flex flex-row justify-center items-even w-3/4 h-32 bg-slate-200 p-3 border border-zinc-300'>
                <article className="justify-self-center text-center w-1/2 border-r-2 border-amber-100">
                    <h2 className = "font- light text-lg p-3">INCOME</h2>
                    <p className = 'text-blue-500 text-lg'>{`$ ${money.income}`}</p>
                </article>
                <article className="justify-self-center text-center w-1/2 border-l-2 border-amber-100">
                    <h2 className = "font- light text-lg p-3">EXPENSES</h2>
                    <p className = 'text-red-400 text-lg'>{`$ ${money.expenses}`}</p>
                </article>
            </section>
        </Fragment>
    )
}

export default IncomeExpenses;
