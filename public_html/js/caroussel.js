/* All images names ( not paths, it will be added later ) */
var imgs	= ["student.jpg",
		   "map-globe-network.jpg",
		   "passeport.jpg"];
/* Index for browsing image and content arrays */
var i		= 0;
/* Time to wait until it switch to the next image */
var pause	= 4000;
var fadePause	= 30;

/* content for each image, composed of a title and a text */
var content	= [["Doubles diplômes", "Envie d'une offre de formation unique vous permettant d'obtenir à la fois le diplôme de l'INSA Toulouse, et celui d'une école partenaire ? </br></br> Venez consulter dès à présent les partenariats possibles en France, mais aussi dans le monde entier ! "],
		   ["Semestres à l'étranger", "Quelle université choisir pour effctuer un semestre à l'étranger ? Dans quelle langue sont dispensés les cours ? Quelles matières sont enseignées ?</br></br> Dans cette section, retrouvez toutes les informations concernant la scolarité au sein des universités paternaires."],
		   ["Administration", "Problème de budget, de demande de VISA ou de logement ? Un simple besoin de renseignements ? </br></br> N'hésitez pas à prendre rendez-vous avec le responsable ressources internationales de votre département d'étude ou d'envoyer vos questions via le forumlaire de contact. "]];

async function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function setbackground(){
    var j;

    window.setTimeout( "setbackground()", pause);
    
    if(i == imgs.length) {i = 0;}
    
    newImage = 'url(./img/' + imgs[i]  + ')';

    for(j = 0; j <= 10; j++) {
	document.getElementById("content-index-page").style.opacity = (1 - j/10).toFixed(1);
	await sleep(fadePause);
    }

    document.getElementById("content-index-page").style.backgroundImage = newImage;
    document.getElementById("info-box-title").innerHTML			= content[i][0];
    document.getElementById("info-box-text").innerHTML			= content[i][1];

    for(j = 0; j <= 10; j++) {
	document.getElementById("content-index-page").style.opacity = (j/10).toFixed(1);
	await sleep(fadePause);
    }
    
    i++;
}
