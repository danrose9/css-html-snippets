// const progressDone = document.querySelectorAll('.progress-done');
const wrapper = document.getElementById('wrapper');

var jsonObj = JSON.parse('{"HTML": 72,"CSS": 47,"Javascript": 34,"Bootstrap": 87,"Angular": 10,"NodeJS": 29}');

var i = 0;
let arrayLength = Object.keys(jsonObj).length;
console.log("There are " + arrayLength + " elements in the array");

function createDiv(divId, text) {
    var div = document.createElement("div");
    div.id = divId;
    div.innerText = text;
    
    return div;
  }

// Loop to create a div element


var fragment = document.createDocumentFragment();

for (var key in jsonObj) {

    let value = jsonObj[key];
    console.log(key + ": " + value);

    var board = document.createElement('div');
    board.id = "box";
    board.innerText = key + " : " + value + "%";   
    wrapper.appendChild(board);
    
    var progress = document.createElement('div');
    progress.id = "progress";
    board.appendChild(progress);
    //fragment.appendChild(div);

    
    var progressDone = document.createElement('div');
    progressDone.id = "progress-done";
    progress.appendChild(progressDone);
    progressDone.style.width = value + '%'; // Progress Bar
    progressDone.style.opacity = 1;
    
    i++
 }
 
 // wrapper.appendChild(board);





