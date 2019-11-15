var paused_count = 0;
var resumed_count = 0;
var launched_count = 0;

//var key = "bag";
//var value = "Soft";
window.localStorage.setItem(
"Bag",
"Soft"
);

//var key = "Jacket";
//var value = "Black";
window.localStorage.setItem(
"Jacket",
"Black"
);          

//var key = "Pants";
//var value = "Fabric";
window.localStorage.setItem(
"Pants",
"Fabric"
);

//var key = "Watch";
//var value = "Clock";
window.localStorage.setItem(
"Watch",
"Clock"
);

//var key = "Phone";
//var value = "Electronic";
window.localStorage.setItem(
"Phone",
"Electronic"
);

//var myObj, myJSON, text, obj;

var myObj = {name: "Milka Chocolate", energy: "83kcal", Fat: "5.2g", Saturates: "2.9g", sugars: "7.3g", salt: "0.06g"};
var myJSON = JSON.stringify(myObj);
localStorage.setItem("ChocolateJSON", myJSON);

text = localStorage.getItem("ChocolateJSON");
obj = JSON.parse(text);
document.getElementById("Chocolate").innerHTML = obj.name;

//window.localStorage.getItem("Phone");

window.localStorage.length;

document.getElementById("result").innerHTML = localStorage.getItem("Phone");


document.addEventListener("deviceready", onDeviceReady, false);
		

function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
