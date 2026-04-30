let num = 10
numbertype(num)
num = -10
numbertype(num)
num = 0
numbertype(num)

function numbertype (num){
if(num >0)
    {
    console.log ("positive number is :" ,num );
}
else if (num <0)
{
console.log ("negative number is :", num);
}
else 
    {
    console.log ("Number is zero :", num);
}
}


