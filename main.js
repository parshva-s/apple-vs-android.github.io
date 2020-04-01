//this is the java file
"use strict";

document.getElementById('button2').addEventListener('click', Android);
document.getElementById('button3').addEventListener('click', Apple);

function Android() {
    //change picture
    document.getElementById('img1').src = 'Media/Android-Logo.jpg';
    //change text of link
    document.getElementById('link1').innerHTML = 'Android Home';
    //change colour of link backgorund
    document.getElementById('button1').style.backgroundColor = '#a4c93b';
    //change link
    document.getElementById('link1').href = 'https://www.android.com/';
    //change background of body
    document.getElementById('body').style.backgroundColor = '#a4c93b'; 
}

function Apple() {
    //change picture
    document.getElementById('img1').src = 'Media/Apple-Logo.jpg';
    //change text of link
    document.getElementById('link1').innerHTML = 'Apple Home';
    //change colour of link background
    document.getElementById('button1').style.backgroundColor = '#b6bcca';
    //change link
    document.getElementById('link1').href = 'https://www.apple.com/';
    //change background of body
    document.getElementById('body').style.backgroundColor = '#b6bcca'; 
}