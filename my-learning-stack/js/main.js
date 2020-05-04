const progress = document.querySelectorAll('.progress-done');

var jsonObj = JSON.parse('{"value0": 12, "value1": 47, "value2": 34, "value3": 87, "value4": 3, "value5": 29}');

var i = 0;
    
// enumerate json
for (var key in jsonObj) {

    var value = jsonObj[key];
    console.log(value);

    var percentDone = document.getElementById(key).innerHTML = value + "%"; // value

    progress[i].style.width = value + '%'; // Progress Bar
    progress[i].style.opacity = 1;
    i++;

}