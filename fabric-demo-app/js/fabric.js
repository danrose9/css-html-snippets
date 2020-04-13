    var buttonElements = document.getElementById('test');

    buttonElements.onclick = function() {
        for (var i = 0; i < ButtonElements.length; i++) {
            new fabric['Button'](ButtonElements[i], function () {
                console.log('clicked');
            });
        }
    }

    
    // Try this instead
    // object.addEventListener("click", myScript);