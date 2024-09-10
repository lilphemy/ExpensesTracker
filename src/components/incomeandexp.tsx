import { useState, Fragment } from "react";

function IncomeExpenses () {
    const [money, setMoney] = useState({income: 0.00, expenses: 0.00})

    return(
        <Fragment>
            <section>
                <article>
                    <h2>INCOME</h2>
                    <p>{`$ ${money.income}`}</p>
                </article>
                <article>
                    <h2>EXPENSES</h2>
                    <p>{`$ ${money.expenses}`}</p>
                </article>
            </section>
        </Fragment>
    )
}

export default IncomeExpenses;