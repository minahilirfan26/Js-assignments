/*===========QUESTION#01===========
Declare an empty array using JS literal notation to store
student names in future.
**/

//let arry = [];
//console.log(arry)

/*===========QUESTION#02===========
Declare an empty array using JS object notation to store
student names in future.
**/

//let arry = new Array();
//console.log(arry)

/*===========QUESTION#03===========
Declare and initialize a strings array.
**/
//let arry = ["Html","Css","JavaScript","Frontend"];
//console.log(arry)

/*===========QUESTION#04===========
Declare and initialize a numbers array.
**/

//let arry = [5,2,7,6,9];
//console.log(arry)

/*===========QUESTION#05===========
Declare and initialize a boolean array
**/

//let arry = [true,false];
//console.log(arry);


/*===========QUESTION#06===========
Declare and initialize a mixed array.
**/

//let arry = [true,"Hello World",7,false,10];
//console.log(arry);


/*===========QUESTION#07===========
 Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like:
**/

//let qualification = "<h1>Qualificatios:</h1>";
//document.write(qualification);
//let arry =["1) SSC <br>"+"2) HSC <br>"+ "3) BCS <br>"+ "4) BS <br>"+"5) BCOM <br>"+"6) MS <br>"+"7) M. Phil <br>"+"8) PhD"];
//document.write(arry);


/*===========QUESTION#08===========
Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:
**/

//let students =["Mahnoor","Minahil","Dua"];
//let scores = [320,480,230];
//document.write("<b>"+"Score of "+students[0]+" is "+scores[0]+" Percentage: "+(scores[0]*100)/500+"%"+"</b>"+"<br>");
//document.write("<b>"+"Score of "+students[1]+" is "+scores[1]+" Percentage: "+(scores[1]*100)/500+"%"+"</b>"+"<br>");
//document.write("<b>"+"Score of "+students[2]+" is "+scores[2]+" Percentage: "+(scores[2]*100)/500+"%"+"</b>"+"<br>");


/*===========QUESTION#09===========
Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.
**/

//let color = ["Yellow","Green","Pink","Purple","Blue"];
//document.write("<b>Colors</b>"+"<br>"+color+"<br>"+"<br>");
//color.push("<i>Red</i>");
//document.write("<b>User Color:</b>"+"<br>"+color+"<br>"+"<br>")
//color.unshift("<i>Orange</i>","<i>Black</i>");
//document.write("<b>Two more color added:</b>"+"<br>"+color+"<br>"+"<br>");
//delete color[0];
//document.write("<b>Delete 1st Color:</b>"+"<br>"+color+"<br>"+"<br>");
//color.splice(2,3,"White")
//document.write("<b>User index:</b>"+"<br>"+color+"<br>"+"<br>");
//let user = color.slice(0,4)
//document.write("<b>User delete index:</b>"+"<br>"+user+"<br>"+"<br>");



/*===========QUESTION#10===========
Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:
**/

//let arry = [320,230,480,120];
//document.write("Scores of students: "+arry+"<br>");
//document.write("Ordered Scores of students: "+arry.sort());


/*===========QUESTION#11===========
Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array
**/

//let cities = ["Karachi","lahore","Peshawar","Quetta","Islamabad"];
//document.write("Cities List: "+"<br>"+cities+"<br>"+"<br>");
//document.write("Selected cities list: "+"<br>"+cities.slice(1,3));


/*===========QUESTION#12===========
Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)
**/

//let arry = ["This ", " is ", " my ", " cat"];
//document.write("Array:"+"<br>"+arry+"<br>"+"</br>")
//document.write("String:"+"<br>"+arry.join(" "));


/*===========QUESTION#13===========
Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)
**/

//let device = ["Keyboard","mouse","printer","monitor"];
//document.write("Devices: "+"<br>"+device+"<br>"+"<br>");
//device.forEach(function(val){
//    document.write("Out"+"<br>"+val+"<br>")
//});

/*===========QUESTION#14===========
Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last InFirst Out)
**/

//let device = ["Keyboard","mouse","printer","monitor"];
//document.write("Devices: "+"<br>"+device+"<br>"+"<br>");
//let store = device.reverse();
//store.forEach(function(val){
//    document.write("Out"+"<br>"+val+"<br>")
//});


/*===========QUESTION#15===========
Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method:
**/

//let store = ["Samsung","Motorola","Nokia","Sony","Haier"];
//document.write("<select>"+
//"<option>"+store[0]+"</option>"+
//"<option>"+store[1]+"</option>"+
//"<option>"+store[2]+"</option>"+
//"<option>"+store[3]+"</option>"+
//"<option>"+store[4]+"</option>"+
//"</select>")
