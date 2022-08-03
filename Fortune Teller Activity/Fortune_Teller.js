<div id="container">

    <h1>Discover Your Fortune!</h1>
  
    <button onclick="tellFortune()">Press to find out your fortune!</button>
  
    <button onclick="reset()">Reset</button>
  
    <br/><br/>
  
    <!--This is where the random text will go-->
    <div id="fortune"></div>
    
    <br/><br/><br/>
    Other ideas for random projects:
    <ul>
      <li>Name Generator</li>
      <li>Which character are you? (with images)</li>
      <li>Random background color</li>
      <li>Guess the Number</li>
      <li>A game involving random numbers</li>
      <li>Harry Potter Sorting Hat</li>
      <li>Dice roll</li>
    </ul>
  
  </div>

body
{
  background: darkorchid;
  background: linear-gradient(to right, midnightblue, darkorchid);
  color: white;
  font-family: TrebuchetMS, Verdana;
  //text-shadow: 2px 2px purple;
}

#container
{
  border: 2px dotted white;
  background-color:orchid;
  margin: 20px;
  padding: 10px;
}

#fortune
{
  border: 2px solid white;
  background-color: darkslateblue;
  padding: 20px;
}

h1
{
  text-shadow:3px 3px purple;
}

var fortunes = [
  // add more array items here if you want, make sure you put a comma between each one. You can use HTML here! Just remember that if it contains quotes, they need to be escaped, like this: \"
  "You will win a <em>million</em> dollars! Yay!",
  "You will step on a piece of gum.",
  "You will be attacked by a fluffy bunny."
];

function tellFortune() {
  
  // generate a random number between 0 and the number of the array items
  var randomNumber = Math.floor(Math.random() * fortunes.length);

  // print the random number to the console log to make sure it's working
  console.log("random number: " + randomNumber);

  // take the fortune at the random spot in the array and insert it into the "fortune" div
 document.getElementById("fortune").innerHTML = fortunes[randomNumber];
}

function reset() {
  // what goes here? (hint: make the fortune div contain an empty string)
  
}