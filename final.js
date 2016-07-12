<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
alert ("ok");
=======
=======
>>>>>>> shoheiverson/master
=======
>>>>>>> shoheiverson/master

var canvas = document.getElementById( 'map-canvas' ) ;

var latlng = new google.maps.LatLng( 35.792621 , 139.806513 );

var mapOptions = {
	zoom: 15 ,				
	center: latlng ,		
};

// [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
var map = new google.maps.Map( canvas , mapOptions ) ;

<<<<<<< HEAD
function play(){
<<<<<<< HEAD
  alert ("ok");
}
var playButton = document.querySelector("#decide");
playButton.addEventListener("click", play);

>>>>>>> shoheiverson/master
=======
  alert ("ok")
}
var playButton = document.querySelector("#decide");
playButton.addEventListener("click", play);
>>>>>>> shoheiverson/master
=======
function decide(){
 alert ("ok")
}
var decideButton = document.querySelector("[data-role=decide]");
decideButton.addEventListener("click", decide);
>>>>>>> shoheiverson/master
