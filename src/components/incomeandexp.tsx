import { useState, useContext, useEffect, Fragment } from "react";
import { GlobalContext } from "../context/GlobalState";


function IncomeExpenses () {
    const {transactions} = useContext(GlobalContext)
    const [money, setMoney] = useState({income: 0.00, expenses: 0.00}) 

    useEffect(() => {
        const mainAmount = transactions.map((singValue) => singValue.amount)
        const expens = mainAmount.filter((value) => value < 0)
        const revenue = mainAmount.filter((value) => value > 0)
        setMoney({...money, income: revenue.reduce((prev, curr) => prev += curr), expenses: Math.abs(expens.reduce((prev, curr) => prev += curr))})
    }, [transactions])

    return(
        <Fragment>
            <section className = 'm-auto m-0 flex flex-row justify-center items-even w-3/4 h-32 bg-slate-200 p-3'>
                <article className="justify-self-center text-center outline outline-3">
                    <h2 className = "font-bold text-lg p-3">INCOME</h2>
                    <p>{`$ ${money.income}`}</p>
                </article>
                <article className="justify-self-center text-center outline outline-3">
                    <h2 className = "font-bold text-lg p-3">EXPENSES</h2>
                    <p>{`$ ${money.expenses}`}</p>
                </article>
            </section>
        </Fragment>
    )
}

export default IncomeExpenses;