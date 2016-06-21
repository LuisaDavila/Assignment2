//Luisa Davila Assignment 2-Part 1 

//STEP 1
/*
var yourName;
yourName = window.prompt("Enter your name");
window.alert (yourName.length);
*/

//STEP 2
/*
var yourName;
yourName = window.prompt("What is your first name","First name");
var numValue;
numValue = window.prompt ("Enter a number between 1 and" + yourName.length);
alert(yourName.charAt(numValue-1));
*/

//STEP 3
/*
var firstName;
firstName = window.prompt("What is your first name", "First Name");
var lastName;
lastName = window.prompt("What is your last name", "Last Name");
alert(firstName + lastName);
*/

//STEP 4
/*
var fox= "The quick brown fox jumps over the lazy dog";
alert (fox.indexOf("fox"));
*/

//STEP 5
/*
var fox= "The quick brown fox jumps over the lazy fox";
alert(fox.lastIndexOf("fox"));
*/

//STEP 6
/*
var fox= "The quick brown fox jumped over the lazy dog";
var fullName;
fullName= window.prompt ("What is your full name", "First and Last name");
alert(fox.replace("the lazy dog", fullName));
*/

//STEP 7
/*
var fox= "The quick brown fox jumps over the lazy dog";
var word;
word = window.prompt ("Enter a word", "Enter a word here");
alert(fox.search(word));
*/

//STEP 8
/*
var old_string = "The quick brown fox jumps over the lazy dog";
var new_string= old_string.slice(30,43);
alert(new_string.toUpperCase());
*/

//STEP 9
/*
var fox = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
var foxTrim= fox.trim();
alert(foxTrim.toLowerCase());
*/

//STEP 10
/*
var fox = "the quick brown fox jumps over the lazy dog"; 
var capitolize = fox.charAt(0).toUpperCase(); 
alert(capitolize + fox.slice(1));
*/