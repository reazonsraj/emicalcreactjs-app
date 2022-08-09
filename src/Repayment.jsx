import React from "react";  
import { useState } from "react";





const Repayment =()=> {

    
const [loanAmt, setLoanAmt] = useState("");
const[loanIntrest,setLoanIntrest]=useState("");
const[loanTerm,setLoanTerm]=useState("");
const[monthlyPayment,setMonthlyPayment]=useState(0.00);


// The user enters an interest rate of 9.5%. The total loan amount they enter is $38,000
// Interest = (0.095 / 12) * 38,000
// Interest: $300.83
// You will require a 1% minimum payment on the principal.
// Principal = 38,000 * 1%
// Principal = $380
// TOTAL PAYMENT: $680.83

const calculateValues = (e) => {
    e.preventDefault();
    let intrest = (loanIntrest /100) /loanTerm*loanAmt;
    let miniumPaymnent=loanAmt*0.01;
    let totalPayment=intrest+miniumPaymnent;
    setMonthlyPayment(totalPayment.toFixed(2));
    
    console.log(totalPayment);

}

    return (
        <div class="calculator">
            <form>
                <input onChange={(e)=>setLoanAmt(e.target.value)}  type="number" placeholder="Loan Amount" class="loanamount" required /><br></br>
                <input onChange={(e)=>setLoanIntrest(e.target.value)} type="number" placeholder="Interest Rate" class="loanamount" required/><br></br>
                <input onChange={(e)=>setLoanTerm(e.target.value)}    type="number" placeholder="Loan Term" class="loanamount" required/><br></br>
                <button onClick={(e)=>calculateValues(e)} id="calc">Calculate</button>
                <h3>Estimated Monthly Payments : ${monthlyPayment}</h3>
                


            </form>
            
           
        </div>
        
    )
}

export default Repayment;