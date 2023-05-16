/*==============================================
              QUESTION#01
=========================================
Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights”
**/

//let city = prompt("Enter ur city");
//if (city === "Karachi") {
//    document.write("Welcome to city of lights");
//} else if (city === "Lahore") {
//    document.write("Welcome to city of Garden");
//} else if (city === "Peshawar") {
//    document.write("Welcome to city of Flowers");
//} else if (city === "Quetta") {
//    document.write("Welcome to city of Forgotten Dreams");
//};


/*==============================================
              QUESTION#02
=========================================
 Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am.
**/

//let gender = prompt("Enter ur gender here!");
//if (gender==="Male") {
//    document.write("Good Morning Sir")
//} else if (gender ==="Female"){
//    document.write("Good Morning Ma'am")
//};


/*==============================================
              QUESTION#03
=========================================
Write a program to take input color of road traffic signal
from the user & show the message according to this table:
**/

//let color = prompt("Enter the Traffic signal clors");
//if (color==="Red") {
//    document.write("Must Stop");
//};
//if (color==="Yellow") {
//    document.write("Ready to move");
//};
//if (color==="Green") {
//    document.write("Move now");
//};

/*==============================================
              QUESTION#04
=========================================
Write a program to take input remaining fuel in car (in
litres) from user. If the current fuel is less than 0.25litres,
show the message “Please refill the fuel in your car”
**/

//let fuel = prompt("Please enter ur remaining fuel in car");
//if (fuel === "0.25 litres") {
//    document.write("Please refil the fuel in your car");
//} else{
//    document.write("Your car is full")
//}


/*==============================================
              QUESTION#05
=========================================
. Run this script, & check whether alert message would be
displayed or not. Record the outputs
**/

//var a = 4;
//if (++a === 5){
//alert("given condition for variable a is true");
//}

//var b = 82;
//if (++b === 83){
//alert("given condition for variable b is true");
//}

//var c = 12;
//if (++c === 13){
//alert("condition 1 is true");
//}
//if (c === 13){
//alert("condition 2 is true");
//}
//if (++c === 14){
//alert("condition 3 is true");
//}
//if(c === 14){
//alert("condition 4 is true");
//}

//var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;
//if (totalCost === laborCost + materialCost){
//alert("The cost equals");
//}

//if (true){
//   alert("True");
//   }
//   if (false){
//   alert("False");
//   }

//  if("car" < "cat"){
//      alert("car is smaller than cat");
//      }
        

/*==============================================
              QUESTION#06
=========================================
Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table:
**/

//let markSheet = "<h1>Mark Sheet</h1>";
//document.write(markSheet);
//let sub1 = +prompt("Enter Obt marks of sub1");
//let sub2 = +prompt("Enter Obt marks of sub2");
//let sub3 = +prompt("Enter Obt marks of sub3");
//let totalNum = +prompt("Total num?");
//document.write("Total marks: "+ totalNum+"<br>")
//let obt = sub1+sub2+sub3;
//document.write("Marks obtained: "+obt+"<br>");
//let percentage = Math.round((obt*100)/totalNum);
//document.write("Percentage: "+percentage+"%"+"<br>")
//
//if (percentage>=80) {
//    document.write("Grade: A-one"+"<br>");
//    document.write("Remarks: Excellent");
//} else if (percentage>=70) {
//    document.write("Grade: A"+"<br>");
//    document.write("Good");
//} else if (percentage>=60) {
//    document.write("Grade: B"+"<br>");
//    document.write("You need to improve");
//} else if (percentage>60) {
//    document.write("Fail"+"<br>");
//    document.write("Sorry");
//}



/*==============================================
              QUESTION#07
=========================================
Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.
**/

//let secretNum = 3;
//let guessNum = +prompt("Guess a Secret num");
//if (secretNum === guessNum) {
//    document.write("Bingo! Correct answer")
//} else if(secretNum === guessNum + 1 || secretNum === guessNum - 1){
//    document.write(guessNum+" Close enough to the correct answer")
//}else{
//    document.write(guessNum+" Ur secret num is not correct");
//}


/*==============================================
              QUESTION#08
=========================================
Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3.
**/

//let randomNum = +prompt("Enter a num");
//if (randomNum % 3 ===0) {
//    document.write(randomNum+" is divisible by 3")
//} else {
//    document.write(randomNum+" is not divisible by 3")
//};


/*==============================================
              QUESTION#09
=========================================
Write a program that checks whether the given input is an
even number or an odd number.
**/

//let randomNum = +prompt("Enter a num");
//if (randomNum %2 ===0 || randomNum === "even") {
//    document.write(randomNum+ " is Even Num")
//} else if (randomNum %2 !==0 || randomNum === "odd"){
//    document.write(randomNum +" is Odd num");
//}


/*==============================================
              QUESTION#10
=========================================
. Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”
**/

//let temp = +prompt("Enter the value of temperature");
//if (temp > 40) {
//    document.write("It is too hot outside")
//} else if (temp > 30) {
//    document.write("The Weather today is Normal")
//} else if (temp > 20) {
//    document.write("Today’s Weather is cool")
//} else if (temp > 10) {
//    document.write("OMG! Today’s weather is so Cool")
//}


/*==============================================
              QUESTION#11
=========================================
Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.
**/

//let FirstNum = +prompt("Enter ur 1st num");
//let SecondNum = +prompt("Enter ur 2Nd num");
//let Operation = prompt("Enter operation Uh want [+,-,*,/,%");
//if (Operation==="+") {
//    document.write(FirstNum," + ",SecondNum," = ",FirstNum+SecondNum);
//} else if (Operation==="-") {
//    document.write(FirstNum," - ",SecondNum," = ",FirstNum-SecondNum);
//} else if (Operation==="*") {
//    document.write(FirstNum," * ",SecondNum," = ",FirstNum*SecondNum);
//} else if (Operation==="/") {
//    document.write(FirstNum," / ",SecondNum," = ",FirstNum/SecondNum);
//}  else if (Operation==="%") {
//    document.write(FirstNum," % ",SecondNum," = ",FirstNum%SecondNum);
//};