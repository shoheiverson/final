
alert ("ok");

var canvas = document.getElementById( 'map-canvas' ) ;

var latlng = new google.maps.LatLng( 35.792621 , 139.806513 );
var mapOptions = {
	zoom: 15 ,				
	center: latlng ,		
};

// [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
var map = new google.maps.Map( canvas , mapOptions ) ;

function play(){

  alert ("ok");
}
var playButton = document.querySelector("#decide");
playButton.addEventListener("click", play);

  alert ("ok")
var playButton = document.querySelector("#decide");
playButton.addEventListener("click", play);

function decide(){
 alert ("ok")
}

var decideButton = document.querySelector("[data-role=decide]");
decideButton.addEventListener("click", ShuffleRestaurants);

var ResLatitude;
var ResLongitude;

function ShuffleRestaurants() {
	rand = Math.floor(Math.random()*5);
	if (rand == 0) ResLatitude = "35.552884"; ResLongitude = "139.646072"; msg = "たつ吉"; 
	if (rand == 1) ResLatitude = "35.554231"; ResLongitude = "139.646933"; msg = "とんかつ三田"; 
	if (rand == 2) ResLatitude = "35.554058"; ResLongitude = "139.645572"; msg = "武蔵屋";
	if (rand == 3) ResLatitude = "35.552986"; ResLongitude = "139.646392"; msg = "くりの木";
	if (rand == 4) ResLatitude = "35.553007"; ResLongitude = "139.645508"; msg = "クークリ";
	alert(msg);
}