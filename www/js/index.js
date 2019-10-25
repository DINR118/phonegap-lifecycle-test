var paused_count = 0;
var resumed_count = 0;
var launched_count = 0;


window.localStorage.setItem(
"Bag",
"Soft"
);


window.localStorage.setItem(
"Jacket",
"Black"
);


window.localStorage.setItem(
"Pants",
"Fabric"
);


window.localStorage.setItem(
"Watch",
"Clock"
);


window.localStorage.setItem(
"Phone",
"Electronic"
);

window.localStorage.getItem("Phone");

window.localStorage.length;

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
