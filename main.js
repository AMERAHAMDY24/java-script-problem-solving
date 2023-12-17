//1- Write a program that allow to user enter number then print it


/*var num=window.prompt("Enter a number")
console.log(num); */




// 2- write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no


/*  var num= window.prompt("enter a number")
 if(num%3==0 &&num%4==0)
{     console.log("yes")
 }
 else
 {
console.log("no");
 }
*/





// 3- Write a program that allows the user to insert 2 integers then print the max

/*var num1=window.prompt("enter number 1")
var num2=window.prompt("enter number 2")

if(num1 > num2)
{
console.log(num1);
}
else{
    console.log(num2);
}*/




// 4-Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.


/*var num=window.prompt("enter a number")
if(num<0)
{
    console.log("negative")
}
else 
{
    console.log("positive")
}
*/


// 5-Write a program that take 3 integers from user then print the max element and the min element.
/* 

var num1= window.prompt("enter number 1")
var num2= window.prompt("enter number 2")
var num3= window.prompt("enter number 3")
if(num1>num2 && num2>num3)
{
    console.log("max element =" , num1)
    console.log ("and min element=" , num3)
}

else if(num1>num3 && num3>num2)
{
    console.log("max element =" , num1)
    console.log ("and min element=" , num2)
}




else if(num2>num1 && num1>num3)
{
    console.log("max element =" ,num2)
    console.log ("and min element=", num3)
}

else if(num2>num3 && num3>num1)
{
    console.log("max element =" ,num2)
    console.log ("and min element=", num1)
}

else if(num3>num2 && num2>num1)
{
    console.log ("max element =" ,num3 )
   console.log ("and min element=", num1)
}
else if(num3>num1 && num1>num2)
{
    console.log("max element =" ,num3)
    console.log ("and min element=", num2)
}*/


// 6- Write a program that allows the user to insert integer number then check If a number is oven or odd

/*var num=window.prompt("enter a number")
if (num%2==0)
{ 
    console.log("even")
}
else{
    console.log("odd")
}*/


// 7-Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant 

/*
var character= window.prompt("enter a character")
if (character=="a" ||character=="A"||character=="e"||character=="E" || character=="i"||character=="I"||character=="o"||character=="O"||character=="u" ||character=="U" )
{
    console.log("vowel")
}
else{
    console.log("consonant")
}
*/



// 8-Write a program that allows user to insert integer then print all numbers between 1 to that’s number

/*var num= window.prompt("enter a number")

if (num >=1)
{
    for (var i=1; i<=num; i++)
    {
        console.log(i)
    }
}

*/




// 9- Write a program that allows user to insert integer then print a multiplication table up to 12.
/*
var num =window.prompt("enter a number")
if (num>=1)
{
    for (var i=1; i<=12 ;i++){
        console.log(i*num)
    }
}

*/





// 10-Write a program that allows to user to insert number then print all even numbers between 1 to this number

/*var num = window.prompt("enter a number")


    for(i=1; i<=num; i++){
        if(i%2==0)
        {console.log(i)}
    }
    */

   
   
 // 11- Write a program that take two integers then print the power

/*
var base=window.prompt("enter  number 1")
var exponent=window.prompt("enter number 2")
var result=1;
for (var i=1;i<=exponent;i++)
{
       result*=base;
}
console.log(result)*/


// 12-Write a program to enter marks of five subjects and calculate total, average and percentage.



/*
var mark1=window.prompt("enter mark 1")
var mark2=window.prompt("enter mark 2")
var mark3=window.prompt("enter mark 3")
var mark4=window.prompt("enter mark 4")
var mark5=window.prompt("enter mark 5")

var sumution= Number(mark1) + Number (mark2)+Number(mark3) + Number(mark4)+ Number(mark5);
var average= sumution / 5;
console.log("Total Marks =" , sumution);
console.log("Average Marks =" , average);
console.log("percentage =" , average,"%");
*/


// 13-Write a program to input month number and print number of days in that month
/*
var month_number= window.prompt("please enter a month number")
if (month_number==1 || month_number==3||month_number==5 ||month_number==7||month_number==8||month_number==10||month_number==12)
{
    console.log("Days in Month:31")
}
else if(month_number==4||month_number==6||month_number==9||month_number==11)
{
    console.log("Days in Month:30")
}
else if (month_number==2)
{

    console.log("Days in Month:28/29")
}
else{
    console.log("invalid month number")
}
*/



// 14- Write a program to input marks of five subjectsFind percentage and grade


/*
var Physics_mark= window.prompt("enter Physics mark");
var Chemistry_mark= window.prompt("enter Chemistry mark");
var Biology_mark= window.prompt("enter Biology mark");
var Mathematics_mark= window.prompt("enter Mathematics mark");
var Computer_mark= window.prompt("enter Computer mark");
var sumution= Number(Physics_mark) + Number (Chemistry_mark)+Number(Biology_mark) + Number(Mathematics_mark)+ Number(Computer_mark);
var average= sumution / 5;
var percentage= average+"%";


if ( percentage >= "90%")

{
     console.log( percentage,": Grad A")
    }

else if (percentage >= "80%" )
{ 
    console.log(percentage ,": Grad B")
}

else if (percentage >= "70%" )

{ 
    console.log(percentage ,": Grad C")

}
else if  (percentage >= "60%" )

{
    console.log(percentage ,": Grad D")

}

else if (percentage >= "40%" )

{ 
    console.log(percentage ,": Grad E")

}
else if (percentage < "40%" )

{ 
    
    console.log(percentage ,": Grad F")

}
*/





// 15- Write a program to print total number of days in month
/*

var month_number=Number(window.prompt("enter month_number"))
switch(month_number)
{

 case 1:
    console.log("Days in Month:31");
break;




case 3 :
    console.log("Days in Month:31");
break;


case 5 :
    console.log("Days in Month:31");
break;


case 7:
    console.log("Days in Month:31");
break;


case 8:
    console.log("Days in Month:31");
break;
case 10 :
    console.log("Days in Month:31");
break;

case 12 :
    console.log("Days in Month:31");
break;

case 4 ||6||9||11:
    console.log("Days in Month:30");
break;


case 6:
    console.log("Days in Month:30");
break;


case 9:
    console.log("Days in Month:30");
break;


case 11:
    console.log("Days in Month:30");
break;
case 2:
    console.log("Days in Month:28/29");
break;
default:
    console.log("invalid month number");

}

*/


// 16- Write a program to check whether an alphabet is vowel or consonant
/*
var  alphabet= window.prompt("enter an alphabet")
switch(alphabet){
         case "a":
        console.log("vowel");
        break;
        case "A":
        console.log("vowel");
        break;
        case "e":
        console.log("vowel");
        break;
        case "E":
        console.log("vowel");
        break;
        case "o":
        console.log("vowel");
        break;

        case "O":
        console.log("vowel");
        break;
        case "i":
        console.log("vowel");
        break;
        case "I":
        console.log("vowel");
        break;
        case "u":
        console.log("vowel");
        break;
        case "U":
        console.log("vowel");
        break;
        

        default:
            console.log("consonant");
}
*/


// 17- Write a program to find maximum between two numbers
/*
var num1=Number (window.prompt("enter number 1"))
var num2= Number (window.prompt("enter number 2"))
switch(true)
{
    case(num1>num2):
    console.log(num1);
    break;
    case (num2>num1):
        console.log(num2);
        break;
        default:
            console.log("num2=num1");

}
*/

// 18- Write a program to check whether a number is even or odd
/*
var num=window.prompt("enter a number")
switch(true)
{
    case(num%2==0):
        console.log( "even");
        break;
    case(num%2!=0):
        console.log( "odd");
        break;
}
*/

// 19- Write a program to check whether a number is positive or negative or zero
/*
var num= Number(window.prompt("enter a number"))
switch(true)
{
    case(num>0):
    console.log("positive");
    break;
    case(num<0):
    console.log("negative");
    break;
    case(num==0):
    console.log("zero")
    break;
}

*/


// 20- Write a program to create Simple Calculator

/*


var num1= Number(window.prompt("enter number 1"))
var num2= Number (window.prompt("enter number 2"))
var opretor=window.prompt("enter an opretor")
switch(opretor)
{ 
    case "+":
        console.log(num1+num2);
        break;
        case "-":
        console.log(num1-num2);
        break;
        case "*":
        console.log(num1*num2);
        break;
        case "/":
        console.log(num1/num2);
        break;
        case"%":
        console.log(num1%num2);
        break;

        default:
            console.log("invalid opretor")

}

*/


