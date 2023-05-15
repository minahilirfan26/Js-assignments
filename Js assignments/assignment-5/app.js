/*==============================================
              QUESTION#01
=========================================
Write a program that take two numbers & add them in a
new variable. Show the result in your browser
**/
//ADDITION
//let a = +prompt("Enter the value of num1");
//let b = +prompt("Enter the value of num2");
//let sum = a+b;
//document.write("Sum of "+a+" & "+b+" is " +sum);


/*==============================================
                   QUESTION#02
===========================================
//Subtraction
//let a = +prompt("Enter the value of num1");
//let b = +prompt("Enter the value of num2");
//let sum = a-b;
//document.write("Subtraction of "+a+" & "+b+" is " +sum);

//Multiply
//let a = +prompt("Enter the value of num1");
//let b = +prompt("Enter the value of num2");
//let sum = a*b;
//document.write("Multiplication of "+a+" & "+b+" is " +sum);

//DIVISION
//let a = +prompt("Enter the value of num1");
//let b = +prompt("Enter the value of num2");
//let sum = a/b;
//document.write("Division of "+a+" & "+b+" is " +sum);

//MODULUs
//let a = +prompt("Enter the value of num1");
//let b = +prompt("Enter the value of num2");
//let sum = a%b;
//document.write("Modulus of "+a+" & "+b+" is " +sum);


/*=====================================================
                QUESTION#03
=================================================
Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value
after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”.
**/

//let user ;
//document.write("Value after variable declaration is: ??");
//document.write("<br>");
//user = +prompt("enter the value!");
//document.write("Initial value: "+ user,"<br>", "Value after increment is: ", ++user);
//document.write("<br>");
//user = user+7;
//document.write("Value after addition is:  "+ user,"<br>", " Value after decrement is: ",--user);
//document.write("<br>");
//user = user%3;
//document.write("The remainder is :  "+ user);


/*================================================
                  QUESTION#04
============================================
Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie.
**/
//let movieTicket = 600;
//let buyingTickets = +prompt("Enter the quantity of tickets");
//let final = movieTicket*buyingTickets;
//document.write("Total Cost to buy "+buyingTickets+" tickets to a movie is "+final+"PKR")


/*================================================
                  QUESTION#05
============================================
Write a script to display multiplication table of any
number in your browser
**/
//let num = +prompt("enter ur Favourite num here")
//for(let i = 1; i<=10; i++){
//    document.write(num+" X "+ i+ " = "+num*i+"<br>")
//}


/*================================================
                  QUESTION#06
============================================
 The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”
**/

//let Celsius  = +prompt("Enter the Celsius value");
//let Fahrenheit = +prompt("Enter the Fahrenheit val");
//document.write(Celsius+" C° ",(Fahrenheit-32)*5/9," °F"+"<br>");
//document.write(Fahrenheit+" °F ",(Celsius*9/5)+32," °C");


/*================================================
                  QUESTION#07
============================================
Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser.
**/

//let shoppingCraft = "<h1><b>Shopping Craft</b></h1>";
//document.write(shoppingCraft);
//document.write("<br>"+"<br>"+"<br>");
//let item1Price = 500;
//document.write("Price of item 1 is "+ item1Price);
//document.write("<br>")
//let item1Quantity = +prompt("Total Orders item1!!");
//document.write("Quantity os item 1 is "+item1Quantity);
//document.write("<br>")
//let item2Price = 1000;
//document.write("Price of item 2 is "+ item2Price);
//document.write("<br>")
//let item2Quantity = +prompt("Total Orders of item2!!");
//document.write("Quantity os item 2 is "+item2Quantity);
//document.write("<br>")
//let ShippingChargers = 200;
//document.write("Shipping Charges is "+ShippingChargers);
//document.write("<br>")
//document.write("<br>")
//let totalCost = (item1Price*item1Quantity)+(item2Price*item2Quantity)+ShippingChargers;
//document.write("Total cost of your order is "+totalCost);



/*================================================
                  QUESTION#08
============================================
Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser
**/

//let markSheet = "<h1><b>Mark Sheet</b></h1>";
//document.write(markSheet);
//document.write("<br>"+"<br>");
//let totalMarks = 980;
//document.write("Total marks: "+totalMarks);
//document.write("<br>");
//let markObtained = 804;
//document.write("Marks obtained: "+markObtained);
//document.write("<br>");
//let Tpercentage = (markObtained*100)/totalMarks;
//document.write("Percentage: "+Tpercentage+"%");


/*================================================
                  QUESTION#09
============================================
Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee)
**/

//let currency = "<h1><b>Currency in PKR</b></h1>";
//document.write(currency+"<br>"+"<br>");
//let usDollars = 10;
//let us1Dollar = 104.80;
//let SaudiRiyals =25;
//let saudi1Riyal =28;
//document.write("Total Curreny in PKR: ",(usDollars*us1Dollar)+(SaudiRiyals*saudi1Riyal));


/*================================================
                  QUESTION#10
============================================
Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression
**/

//let num = +prompt("enter a num here!");
//document.write(((num+5)*10)/2);


/*================================================
                  QUESTION#11
============================================
The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.
Output them to the screen like so: “They are either NN or NN
years old”.
**/

//let AgeCalculator = "<h1><b>Age Calculator</b></h1>";
//document.write(AgeCalculator+"<br>"+"<br>");
//let currentYear = +prompt("Enter Current year");
//document.write("Current Year: "+currentYear+"<br>");
//let BirthYear = +prompt("Enter your birth year");
//document.write("Birth Year: "+BirthYear+"<br>");
//document.write("Your Age is: ",currentYear-BirthYear);


/*================================================
                  QUESTION#12
============================================
The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The
area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
**/

//let circumference = 2;
//let  circle = 3.142;
//let radiusVal = +prompt("Enter radius value");
//document.write("The radius of a circle "+radiusVal+"<br>")
//let circumferenceVal = "The circumference is "+circumference*circle*radiusVal;
//document.write(circumferenceVal+"<br>");
//document.write("The area is "+(radiusVal*radiusVal)*circle)


/*================================================
                  QUESTION#13
============================================
The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.
**/

//let LifeTime = "<h1><b>The Lifetime Supply Calculator</b></h1>";
//document.write(LifeTime+"<br>"+"<br>");
//let favSnack = prompt("Enter ur fav Snack here");
//document.write("Favorite Snack: "+favSnack+"<br>");
//let CurrentAge = +prompt("Enter ur current age");
//document.write("Current Age: "+CurrentAge+"<br>");
//let maximumAge = +prompt("Enter ur estimated maximum age ");
//document.write("Estimated Maximum Age: "+maximumAge+"<br>");
//let AmountOfSnack = +prompt("Enter ur amount of snacks per day");
//document.write("Amount Of Snack Per Day: "+AmountOfSnack+"<br>");
//document.write("You will need "+(maximumAge-CurrentAge)*AmountOfSnack+" choccolate chip to last you until the ripe old age of "+maximumAge);