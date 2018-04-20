/* eslint-disable */

//h1
var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world';

//img
var myImage = document.querySelector('img');

myImage.onclick = function () {
    "use strict";
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/apple-icon.jpeg');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
};

//button
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

var iDO = function setUserName() {
    "use strict";
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = iDO;

