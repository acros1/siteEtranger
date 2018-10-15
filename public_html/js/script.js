function toggle(div)
{
    var d = document.getElementById(div).style.display;

    if(d == "none")
    {
	document.getElementById(div).style.display =  "block";
    }
    else
    {
	document.getElementById(div).style.display =  "none";
    }
}
