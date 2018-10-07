/* All images names ( not paths, it will be added later ) */
var imgs	= ["student.jpg",
		   "map-globe-network.jpg",
		   "batman1.jpg"];
/* Index for browsing image and content arrays */
var i		= 0;
/* Time to wait until it switch to the next image */
var pause	= 5000;

/* content for each image, composed of a title and a text */
var content	= [["Information", "Hey there ! This is where you're going to put all your information about foreigners and the steps you need to follow in order to study abroad !"],
		   ["Other title", "other text"],
		   ["Another title", "Another text"]];

function setbackground(){
    window.setTimeout( "setbackground()", pause);
    
    if(i == imgs.length) {i = 0;}
    
    newImage = 'url(./img/' + imgs[i]  + ')';

    document.getElementById("content-index-page").style.backgroundImage = newImage;
    document.getElementById("info-box-title").innerHTML			= content[i][0];
    document.getElementById("info-box-text").innerHTML			= content[i][1];
    
    i++;
}
