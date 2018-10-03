var rotate = false;

function setbackground(){
    window.setTimeout( "setbackground()", 3000);
    newImage = rotate ? 'url(./img/batman1.jpg)' : 'url(./img/batman2.jpg)';
    rotate = !rotate;
    document.getElementById("container1").style.backgroundImage = newImage;
}

    
