console.log('fabric.js');

// button-click
var ButtonElements = document.querySelectorAll(".ms-Button");
for (var i = 0; i < ButtonElements.length; i++) {
    new fabric['Button'](ButtonElements[i], function () {
        console.log('clicked');
        alert("You clicked the Create Account button");
    });
}

// dropdown
var DropdownHTMLElements = document.querySelectorAll('.ms-Dropdown');
for (var i = 0; i < DropdownHTMLElements.length; ++i) {
    var Dropdown = new fabric['Dropdown'](DropdownHTMLElements[i]);
}

//list
var ListElements = document.querySelectorAll(".ms-List");
for (var i = 0; i < ListElements.length; i++) {
    new fabric['List'](ListElements[i]);
}

// left-navigation-bar
var PanelExamples = document.getElementsByClassName("ms-PanelExample");
for (var i = 0; i < PanelExamples.length; i++) {
  (function() {
    var PanelExampleButton = PanelExamples[i].querySelector(".ms-Button");
    var PanelExamplePanel = PanelExamples[i].querySelector(".ms-Panel");
    PanelExampleButton.addEventListener("click", function(i) {
      new fabric['Panel'](PanelExamplePanel);
    });
  }());
}

