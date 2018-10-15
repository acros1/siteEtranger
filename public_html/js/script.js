
function loadContent() {
    var txtFile = "../pages/universites.txt";
    var file = new File(txtFile);


    file.open("r"); // open file with read access

    alert("hello");
    
    while (!file.eof) {
	document.getElementById("left").innerHTML = file.readln();
    }
    
    file.close();
}
