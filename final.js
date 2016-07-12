
alert ("ok");

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

  alert ("ok");
}
var playButton = document.querySelector("#decide");
playButton.addEventListener("click", play);

  alert ("ok")
var playButton = document.querySelector("#decide");
playButton.addEventListener("click", play);
=======
var x;
var y;
>>>>>>> shoheiverson/master

function decide(){
 alert ("ok")
}

var decideButton = document.querySelector("[data-role=decide]");
<<<<<<< HEAD
decideButton.addEventListener("click", ShuffleRestaurants);

var ResLatitude;
var ResLongitude;

function ShuffleRestaurants() {
var rand = Math.round(Math.random () * 5) + 1
	if (rand == 0) ResLatitude = "35.552884"; ResLongitude = "139.646072"; msg = "たつ吉"; 
	if (rand == 1) ResLatitude = "35.554231"; ResLongitude = "139.646933"; msg = "とんかつ三田"; 
	if (rand == 2) ResLatitude = "35.554058"; ResLongitude = "139.645572"; msg = "武蔵屋";
	if (rand == 3) ResLatitude = "35.552986"; ResLongitude = "139.646392"; msg = "くりの木";
	if (rand == 4) ResLatitude = "35.553007"; ResLongitude = "139.645508"; msg = "クークリ";
  if (rand == 5) ResLatitude = "35.553908"; ResLongitude = "139.645867"; msg = "ベンダーベンダー";
	alert(msg);
=======
decideButton.addEventListener("click", decide);

function go(){
	var a= Math.floor(Math.random()*6)+1;
	if(a==1){
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目２２−４";
	}
	else if(a==2){
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目２３−２";
	}
	else if(a==3){
		x="〒223-0061、神奈川県横浜市港北区日吉2丁目1-8";
	}
	else if(a==4){
		x="神奈川県横浜市港北区日吉本町１丁目１９−２１、日吉スカイビル1F";
	}
	else if(a==5){
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目３、神奈川県横浜市港北区日吉本町1丁目3−17";
	}
	else{
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目２−４";
	}
	getstart();
}
var GoButton = document.querySelector("[data-role=go]");
GoButton.addEventListener("click", go);

function getstart(){
	console.log("start");
	y=document.getElementById("start").value;
	
	Route();
}

function Route(){
	var request={
  origin:x,
  destination:y,	
  travelMode:google.maps.DirectionsTravelMode.WALKING	
};
directionsService.route(request, function(response, status) {
  if (status==google.maps.DirectionsStatus.OK) {
    directionsDisplay.setDirections(response);
  }
});

>>>>>>> shoheiverson/master
}