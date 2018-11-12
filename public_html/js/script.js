function toggle(div)
{
    if(document.getElementById(div).style.display == "none")
    {
	document.getElementById(div).style.display =  "block";
    }
    else
    {
	document.getElementById(div).style.display =  "none";
    }
}

function toggleMap(div)
{
    var transition = {
	"BRAZIL"	: "BR",
	"CANADA"	: "CA",
	"CHINA"		: "CN",
	"COLOMBIA"	: "CO",
	"SPAIN"		: "ES",
	"JAPAN"		: "JP",
	"USA"		: "US",
	"SOUTHKOREA"	: "KR",
	"LEBANON"	: "LB",
	"NORWAY"	: "NO",
	"ROMANIA"	: "RO",
	"VIETNAM"	: "VN",
	
    };

    /* Display content blocks and change color of the country*/
    if(document.getElementById(div).style.display == "none")
    {
	document.getElementById(div).style.display		= "block";
	document.getElementById(transition[div]).style.fill	= "#CC3300";
    }
    else
    {
	document.getElementById(div).style.display =  "none";
	document.getElementById(transition[div]).style.fill	= "black";
    }
}
