import { useState } from "react"

export const FactAmount = ({onSetAmout}) => {

    const [amount, setAmount] = useState(30)

    const handleChange = (ev) => {
        const { value } = ev.target
        setAmount(value)
    }

    const changeAmount = (ev) => {
        ev.preventDefault()
        onSetAmout(amount)
    }

    return (
        <div className="count-facts">
            <form onSubmit={changeAmount}>
                <input type="numer" value={amount} onChange={handleChange} name="amount" />
                <button className="set-btn">GO!</button>
            </form>
        </div>
    )
}