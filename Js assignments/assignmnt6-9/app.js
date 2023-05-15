/*==============================================
              QUESTION#01
=========================================
Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser:
**/

//let a = +prompt("Enter the num here");
//document.write("<h3>Result:</h3>"+"The value of a "+a+"<br>");
//document.write("....................................................."+"<br>");
//document.write("The value of a++ is: ",++a,"<br>"+"Now the value of a is: "+a+"<br>"+"<br>"+"The value of a++ is: ",a++,"<br>"+"Now the value of a is: ",a,"<br>"+"<br>"+"The value of --a is: ",--a,"<br>"+"The value of a is: "+a+"<br>"+"<br>"+"The value of a-- is: "+a--+"<br>"+"Now the a is: " +a);


/*==============================================
              QUESTION#02
=========================================
What will be the output in variables a, b & result after
execution of the following script:
**/

//var a = 2, b = 1;
//--a;             
//--a - --b;  
//--a - --b + ++b; 
//--a - --b + ++b + b--;  
//document.write("a is "+a+"<br>");
//document.write("b is "+b+"<br>");
//document.write("result is ",a-b);


/*==============================================
              QUESTION#03
=========================================
Write a program that takes input a name from user &
greet the user.
**/

//let user = prompt("Enter ur name");
//document.write("<b>Hello "+user+" welcome here!</b>");


/*==============================================
              QUESTION#05
=========================================
Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default.
**/

//let num = +prompt("Enter a num here");
//let num2 = 5;
//if (num ===num) {
//    for(let i = 1; i<=10; i++){
//        document.write(num+" X "+ i +" = "+ num*i+"<br>");
//    }
//} else if (num !== num){
//    for(let j = 1; j<=10; j++){
//        document.write(num2+" X "+ j +" = "+ num2*j+"<br>");
//    }
//}


/*==============================================
              QUESTION#06
=========================================
Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table)
**/

//let subject1 = prompt("Enter 1st sub name:");
//let subject2 = prompt("Enter 2nd sub name:");
//let subject3 = prompt("Enter 3rd sub name:");
//let TOTAL_MARKS = 100;
//let obtainedMarks1 = +(prompt("Enter obt marks 0f; " + subject1 + ":"));
//let obtainedMarks2 = +(prompt("Enter obt marks 0f; " + subject2 + ":"));
//let obtainedMarks3 = +(prompt("Enter obt marks 0f; " + subject3 + ":"));
//let totalMarks = TOTAL_MARKS * 3;
//let obtainedMarksTotal = obtainedMarks1+obtainedMarks2+obtainedMarks3;
//let percentage = (obtainedMarksTotal/totalMarks) * 100;
//document.write("<table>");
//document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
//document.write("<tr><td>" + subject1 + "</td><td>" + TOTAL_MARKS + "</td><td>" + obtainedMarks1 + "</td></tr>");
//document.write("<tr><td>" + subject2 + "</td><td>" + TOTAL_MARKS + "</td><td>" + obtainedMarks2 + "</td></tr>");
//document.write("<tr><td>" + subject3 + "</td><td>" + TOTAL_MARKS + "</td><td>" + obtainedMarks3 + "</td></tr>");
//document.write("<tr><td colspan='2'>Total Marks:</td><td>" + obtainedMarksTotal + " / " + totalMarks + "</td></tr>");
//document.write("<tr><td colspan='2'>Percentage:</td><td>" + percentage.toFixed(2) + "%</td></tr>");
//document.write("</table>");