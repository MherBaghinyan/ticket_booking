
//converts given string to int
var intConverter = function(text)
{
    var returnNumber = +(text);
    
    if(isNaN(returnNumber))
    {
       alert("can't convert this into int");
       return;
    }
    var indexOfDot = ("" + returnNumber).indexOf(".");
    indexOfDot != -1 && (returnNumber = +(("" + returnNumber).slice(0, indexOfDot)));
    
   return returnNumber;
};

// converts given binary sequence to decimal number
var binaryToDecimal = function(sequence)
{
    var decimal = 0;
    var binary = sequence;
    
    if(!(/^[01]+$/.test(sequence)))
    {
        alert("not a binary sequence string");
        return;   
    }
    
    for(var i=0; i< binary.length; i++)
    {
		decimal += Math.pow(2, i)*(+(binary.slice(binary.length - (i + 1), binary.length -i)));   
    }
    
    return decimal;
};


// prints fibonacci sequence

var fibonacci = function(n)
{
    if(n < 2)
    {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
};

var printFibonacci = function(given)
{
    for(var i=0; i <= given; i++)
    {
        console.log(fibonacci(i));
    }
};

// prints pascal triangle

var pascalTriangle = function(n)
{
     var maxRows = n;
            var r, num;
            for (var i = 0; i <= maxRows; i++) 
			{
                num = 1;
                r = i + 1;
                var logString = "";
                var rowString = "";
                //pre-spacing
                for (var j = maxRows - i; j > 0; j--) 
				{
                    logString += " ";
                }
                for (var col = 0; col <= i; col++) 
				{
                    if (col > 0) 
					{
                        num = num * (r - col) / col;
                    }
                    rowString += (col == 0 ? logString : "") + num;
                }
                console.log(rowString); 
                
            }
};

