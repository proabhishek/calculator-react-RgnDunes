import React, {useState} from 'react';


let butsArray = ["C", "/", "*", "-", "7", "8", "9", "+", "4", "5", "6", "1", "2", "3", "=", "0", "."]

const App = () => {
      
    let [calculate, setCalculate] = useState("");


    function handleCalculations(e){ 
            setCalculate(calculate + e.target.innerText)
    }

    function result(){
          try{
            let ans = eval(calculate)
            setCalculate(ans)
          }
          catch(err){
             setCalculate("Error")
          }

    }

    function clear(){
        setCalculate("")
    }

    
    return(
        <div className="calculator">
              <input type="text"  value={calculate}/> 

              {
                    butsArray.map((item, index) => (
                        <button onClick={item == "=" ? result: item =="C" ? clear: handleCalculations }
                        > {item} </button>
                    ))

                    
              }
              
        </div>
    )
}


export default App;


