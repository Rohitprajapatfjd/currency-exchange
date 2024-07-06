import React,{useId} from 'react'

export default function InputBox({
    label,
    className = "",
    amount,
    setamount,
    currencyOption = [],
    selectCurrencyChange,
    selectCurrency,
    amountDisable = false,
    currencyDisable = false
}) {
    const ids = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={ids} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    id={ids}
                    value={amount}
                    onChange={(e)=> setamount && setamount(Number(e.target.value))}
                    disabled={amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    onChange={(e) => selectCurrencyChange && selectCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                        {currencyOption.map((item)=> (
                      <option selected={(selectCurrency === item)} key={item} value={item}>
                        {item}
                         </option> 
                        ))}
                    

                </select>
            </div>
        </div>
    );
}
