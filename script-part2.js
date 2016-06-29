//Luisa Davila Assignment 2-Part 2

//STEP 1
/*
var num;
num = window.prompt ("Please choose a negative or positive", "Enter number here");
console.log(Math.abs(num));
*/

//STEP 2
/*
var x;
x = window.prompt ("Please enter a floating point value");
alert(Math.ceil(x));
*/

//STEP 3
/*
var x;
x = window.prompt ("Please enter a floating point value");
alert(Math.floor(x));
*/

//STEP 4 Need to work on
/*
var x = window.prompt("Please choose 5 numbers and comma delimit each number" ,"Example 1,2,3,4,5");
var y = x;
console.log(Math.max(y)); */

//STEP 5
/*
var x= window.prompt("Please Enter a Number"); 
console.log (Math.sqrt(x)); */


//Part 2 Date and Date Functions
//STEP 6
/*
var todaysDate = new Date ();
console.log(todaysDate.toDateString());
*/

//STEP 7
/*
var months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var x = new Date();
window.console.log(months[x.getMonth()]);
*/

//STEP 8
/*
var someDate = new Date("12/22/2017");
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";;
window.console.log(month[someDate.getMonth()]);
*/

//STEP 9
/*
var someDate = new Date ("12/22/2016");
if (someDate == 0 || someDate == 6) {
    window.console.log("it is the weekend");
}else {
    window.console.log("it is the workweek");  
} */

//STEP 10 
/*
var today = new Date("06/28/2016");
var yesterday = today -1;
var daysOfWeek = 
["Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",]

if (yesterday >=0) {
    window.console.log(daysOfWeek[yesterday]); 
}else {
    window.console.log(daysOfWeek[6])
}
*/
//STEP 11
/*
var daysOfWeek = new Date();
var week = new Array(7);
week[0]= "Sunday";
week[1]= "Monday";
week[2]= "Tuesday";
week[3]= "Wednesday";
week[4]= "Thursday";
week[5]= "Friday";
week[5]= "Saturday";

var currentDay = week[daysOfWeek.getDay()];
console.log(currentDay.charAt(0)); */

//STEP 13
/*
var studentName = ["Ursula" , "Paul", "Henry" , "Tabitha" , "Lucy"];
var marks = [80,77,88,95,68];
for (i =0; i < marks.length; i++) {
     if (marks[i] >= 90) {
        window.console.log(studentName[i] + " " + "A");
    } else if (marks[i] >= 80) {
       window.console.log(studentName[i] + " " + "B" );
    } else if (marks[i] >=70 ) {
         window.console.log(studentName[i] + " " + "C" );
    } else if (marks[i] >=60 ) {
         window.console.log(studentName[i] + " " + "D" );
    } else if (marks[i] >=50) {
         window.console.log(studentName[i] + " " + "F" );
    }
     }
*/

//STEP 14
/*
for (var i = 1; i <15; i++) {
    if (i % 2 === 0) { //goes through list of numbers to see if divisable by 2
        window.console.log(i + " is an even number");
    } else {
       window.console.log(i + "is an odd number");
    }
}
*/

//STEP 15
/*
for (var i =1; i <100; i++) {
    if ( i % 3 === 0) {
        window.console.log("Fizz");
    } else if (i % 5 ===0) {
        window.console.log("Fizz Buzz")
    } else if (i % 3 === 0 && i % 5 ===0) {
        window.console.log("Fizz Buzz")
    } else {
        window.console.log(i);
    }
} */

//Part 4- Hitchhiker's Guide to the Galaxy
/*

var playGame = prompt("Are you ready to play an awesome game?");
var dontPlayGame;
    if (playGame === "yes") {
        alert("Awesome, our hero is waiting!");
    } else {
        dontPlayGame === confirm("Too bad, we’re going to play anyway because our hero desperately needs your help!" );
    }

    alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

var direction = prompt("Which direction would you like to head (please enter forward, left, or right)");
switch (direction) {
    case "forward" :
        alert("You walk about 100 yards and safely make your way out of the cave.");
        break;
    
    case "left" :
        alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
        break;
        
    case "right" :
        alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
        break;
    
    default :
        alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
}


var rate = prompt("Please Rate my Game on a scale of 1 to 10");
    if (rate < 1 || rate > 10) {
        rate = 10;
    } else {
        
    } if (rate >=6) {
        alert("Thank you, we will continue to make improvements to the game!");
    } else {
        alert("Whatever, you weren’t very good at this game anyway!");
    }
*/

// The Coin Flip Game
//STEP 1
/*
var coinFlip= Math.round(Math.random(coinFlip + 1));
var choice= prompt("Heads or Tails?");
    if (coinFlip == 2) {
        choice = "Heads";
    } else {
        choice = "Tails";
    }
    if (coinFlip == "Heads" && choice == "Heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else if ( coinFlip == "Heads" && choice =="Tails") {
        alert("The flip was heads and you chose tails...you lose!");
    } else if ( coinFlip == "Tails" && choice == "Tails"); {
        alert("The flip was tails and you chose tails...you win!");
    } else {
        alert("The flip was tails and you chose heads...you win!");
    } 

var coinFlip = Math.random();
coinFlip = Math.round(coinFlip);
var choice = prompt('Select "Heads" or "Tails"');
        if (coinFlip == 2) {
            coinFlip = "Heads";
        } else {
            coinFlip = "Tails";
        }
        if (coinFlip == "Heads" && choice == "Heads") { // if coinFlip is equal to 2 then the choice prompt is heads
            alert("The flip was heads and you chose heads...you win!");
        } else if (coinFlip == "Heads" && choice == "Tails") {
            alert("The flip was heads but you chose tails...you lose!");
        } else if (coinFlip == "Tails" && choice == "Heads") {
            alert("The flip was tails but you chose heads...you lose!");
        } else {
            alert("The flip was tails and you chose tails...you win!");
        } */

//Part 6 - The “Coin Flip” Game Redux (5 points)
/*
var coinFlip;
for (var i = 0 ; i < 10; i++) {
    var coinFlip = Math.random();
    coinFlip = Math.round(coinFlip);
    if (coinFlip == 0) {
        window.console.log("Heads");
    }else {
        window.console.log("Tails");
    }
} */

// Part 7 - The “Coin Flip Streak” Game
/*
var coinFlip;
var i = 0;
    do {
        coinFlip = Math.random();
        coinFlip = Math.round(coinFlip);
            if (coinFlip == 0) {
                window.console.log("Heads");
            } else {
                window.console.log("Tails");
            } 
    } while (coinFlip == 0) ; */

// Part 8 – Looping a Triangle 
/*
          var i = 0;
        var sign = "";
        do {
           i += 1;
           sign = sign + "#";
           console.log(sign);
        } while (i <= 6);
        
  */
//Part 9 – Odd or Even? 
/*
for (var i =1; i<= 15; i++) {
    if ((i % 2) == 0) {
    window.console.log(i + "is even");
} else {
    window.console.log(i + "is odd");
}
}
*/
