
function Forcount() {
	var list = document.getElementById("Forlist");
	list.innerHTML = "";
	for (var i = 1; i <= 5; i++) {
		var li = document.createElement("li");
		li.textContent = i;
		list.appendChild(li);
	}
}



function Whilecount() {
	var list = document.getElementById("Whilelist");
	list.innerHTML = "";
	var i = 1;
	while (i <= 5) {
		var li = document.createElement("li");
		li.textContent = i;
		list.appendChild(li);
		i++;
	}
}


function DoWhilecount() {
	var list = document.getElementById("DoWhilelist");
	list.innerHTML = "";
	var i = 1;
	do {
		var li = document.createElement("li");
		li.textContent = i;
		list.appendChild(li);
		i++;
	} while (i <= 5);
}




// var player;
// 		function onYouTubeIframeAPIReady() {
// 			player = new YT.Player('player', {
// 				videoId: 'a3ICNMQW7Ok',
// 				playerVars: {
// 					autoplay: 1,
// 					controls: 1,
// 					rel: 0,
// 					showinfo: 0
// 				},
// 				events: {
// 					'onReady': onPlayerReady
// 				}
// 			});
// 		}
// 		function onPlayerReady(event) {
// 			event.target.playVideo();
// 		}