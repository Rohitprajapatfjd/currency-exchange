import { useState, useEffect } from "react";

function useCurrency(currency) {
    const [data, setdata] = useState({});
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/b1d542e08b35e04b1f0104f5/latest/${currency}`)
            .then((val) => val.json())
            .then((res) => setdata(res["conversion_rates"]))
    }, [currency])
return data;
}

export default useCurrency