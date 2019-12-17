console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( currentInput );
};
var totalPineapple = ""
var emoji = "🍍";
var display = function(stuffToDisplay){
    if(stuffToDisplay==="clear"){
    document.getElementById('output').innerHTML=""
    }
  // your DOM manipulation code here
    var displayPineapple = document.createElement("P")
    for (var i = 0; i < stuffToDisplay; i++) {
        totalPineapple += emoji;
        };
    displayPineapple.innerText = (totalPineapple);
    document.querySelector("#output").appendChild(displayPineapple);
    totalPineapple = ""
    document.querySelector('#input').value = ""
};