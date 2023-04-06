//formula c=(r*P) / (1-(1+r))^-N
//P principal float amount borrowed
//r interest as percentage 
//n terms in months
function calculate(p, r, n){
	

	//convert percent to decimal
	r = ptoD(r)

	//calculate
	
	answer = (r*p)/(1-(1/Math.pow((1+r),(n))));

	return answer
}


function ptoD(percent){
	return (percent/12);

}



function payments(){
	amount = parseFloat(document.getElementById("inAmount").value)
	interest = parseFloat(document.getElementById("inInterest").value)
	term = parseFloat(document.getElementById("inTerm").value)
	term2=parseInt(document.getElementById("inTerm").value)
	toohigh=true
	num = true
	nonneg =true
	nonint=true
	zeroInterest=true
	nonTerm=true
	if (amount>1000000000000000000 || term>1000000000000000000){
		alert("Amount or Term value is too high")
		toohigh=false
	}

	if (isNaN(amount) || isNaN(interest) || isNaN(term)){
		num=false
    	alert("Enter a Number")
  
	}
	if (amount<0 || interest<0 || term<0){
		nonneg=false
    	alert("Enter a Non Negative Number")
    	
	}


    if ((interest % 1 != 0) && (interest>1)){
    	nonint=false
    	alert("Enter a interest rate between 0-1")

    }
    
    if (term% 1 != 0){
    	nonTerm=false
    	alert("Enter a Non-Decimal Number")
    }

	if (interest==0){
		zeroInterest=false
		zeroAnswer=amount/term
		document.getElementById("outMonthly").value = "$" + zeroAnswer.toFixed(2)
		document.getElementById("outSum").value = "$" + amount.toFixed(2)
		document.getElementById("outInterest").value = "$0"
	}
	
	if (num && nonneg && nonint && zeroInterest && nonTerm && toohigh){
		answer = calculate(amount, interest, term)
		document.getElementById("outMonthly").value = "$" + answer.toFixed(2)

		sum = answer * term2
		document.getElementById("outSum").value = "$" + sum.toFixed(2)
		totalInterest = sum - amount 

		document.getElementById("outInterest").value = "$" + totalInterest.toFixed(2)
	}

}



function reset(){
    document.getElementById("inAmount").value = ""
    document.getElementById("inInterest").value = ""
    document.getElementById("inTerm").value = ""
    document.getElementById("outMonthly").innerHTML = ""
    document.getElementById("outSum").innerHTML = ""
    document.getElementById("outInterest").innerHTML = ""
}
