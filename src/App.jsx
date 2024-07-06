import useCurrency from './hooks/useCurrencyhook';
import InputBox from './components/Index';
import { useState } from 'react';
function App() {
 const [amount ,setamount] = useState(0);
 const [selectCurrency,selectCurrencyChange] = useState("USD");
 const [to,setto]= useState("INR");
  const [convertAmount, setconvertAmount] = useState(0)

  const data = useCurrency(selectCurrency);
 const keys = Object.keys(data);

 const swapbtn = ()=>{
  selectCurrencyChange(to);
   setto(selectCurrency);
   setamount(convertAmount);
   setconvertAmount(amount)
 }
  
 const convert = ()=>{
   setconvertAmount(amount * data[to])
 }

  return (
    
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
       
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                setamount={setamount}
                selectCurrency={selectCurrency}
                selectCurrencyChange={selectCurrencyChange}
                currencyDisable = {false}
                amountDisable = {false}               
                currencyOption={keys}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
               onClick={swapbtn}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertAmount}
                setamount={setconvertAmount}
                selectCurrency={to}
                selectCurrencyChange={setto}
                currencyDisable={false}
                amountDisable={false}
                currencyOption={keys}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {selectCurrency.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default App
