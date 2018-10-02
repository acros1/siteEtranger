var rotate = false;

function setbackground(){
    window.setTimeout( "setbackground()", 3000);
    newImage = rotate ? 'url(./img/index.jpeg)' : 'url(./img/index2.jpeg)';
    rotate = !rotate;
    document.getElementById("container1").style.backgroundImage = newImage;
}

    
