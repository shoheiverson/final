

var canvas = document.getElementById( 'map-canvas' ) ;

var latlng = new google.maps.LatLng( 35.553287 , 139.646863);
var mapOptions = {
	zoom: 17 ,				
	center: latlng ,		
};

// [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
//	ちょろ
//var map = new google.maps.Map( canvas , mapOptions ) ;
var map;


var rendererOptions={
	draggable: true,
	preserveViewport: true
};
var directionsDisplay = 
  new google.maps.DirectionsRenderer(rendererOptions);
var directionsService = 
	new google.maps.DirectionsService();
//directionsDisplay.setMap(map);

function init(){
	canvas = document.getElementById( 'map-canvas' ) ;
	map = new google.maps.Map( canvas , mapOptions ) ;
	console.log(canvas);
	directionsDisplay.setMap(map);
	google.maps.event.addListener(directionsDisplay,
   'directions_changed', function(){
 	});

	var LocationButton = document.querySelector("[data-role=get_location]");
	LocationButton.addEventListener("click", get_location);
}



var x;
var y;
var ResLatitude;
var ResLongitude;

function decide(){
var rand = Math.round(Math.random () * 6) + 1
	if (rand == 1) {
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目２２−４"; msg = "たつ吉"; 
	}
	else if (rand == 2) {
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目２３−２"; msg = "とんかつ三田";
	 }
	else if (rand == 3) {
		x="〒223-0061、神奈川県横浜市港北区日吉2丁目1-8"; msg = "武蔵屋";
	}
	else if (rand == 4){
		x="神奈川県横浜市港北区日吉本町１丁目１９−２１、日吉スカイビル1F"; msg = "くりの木";
	}
	else if (rand == 5){
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目３、神奈川県横浜市港北区日吉本町1丁目3−17"; msg = "クークリ";
	}
  else{
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目２−４"; msg = "ベンダーベンダー";
	}
	alert(msg);
}

var decideButton = document.querySelector("[data-role=decide]");
decideButton.addEventListener("click",decide);

function Route(){
	console.log(y);
	var request={
		origin:y,
		destination:x,	
  		travelMode:google.maps.DirectionsTravelMode.WALKING,
  		optimizeWaypoints: true
	};
	directionsService.route(request, function(response, status) {
  	if (status==google.maps.DirectionsStatus.OK) {
    	directionsDisplay.setDirections(response);
		console.log(response);
		
  	}else{
		  cosole.log("hoge");
	  }
});

}





function go(){
	if(!x){
		/*
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
	*/
	decide();
	}
	getstart();
}
var GoButton = document.querySelector("[data-role=go]");
GoButton.addEventListener("click", go);

function getstart(){
	console.log("start");
	//x=document.getElementById("start").value;
	
	y=document.getElementById("start").value;
	
	Route();
}

function Route(){
	console.log(y);
	var request={
		origin:y,
		destination:x,	
  		travelMode:google.maps.DirectionsTravelMode.WALKING,
  		optimizeWaypoints: true
	};
	directionsService.route(request, function(response, status) {
  	if (status==google.maps.DirectionsStatus.OK) {
    	directionsDisplay.setDirections(response);
		console.log(response);
		
  	}else{
		  cosole.log("hoge");
	  }
});

}
/*
var LocationButton = document.querySelector("[data-role=get_location]");
LocationButton.addEventListener("click", get_location);
*/

 
function get_location(){
document.getElementById("area_name").innerHTML
= '位置情報取得します';
if (navigator.geolocation) {

navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
} else {
message = "本ブラウザではGeolocationが使えません";
document.getElementById("area_name").innerHTML
= message;
}
}

function successCallback(pos) {
var Potition_latitude = pos.coords.latitude;
var Potition_longitude = pos.coords.longitude;

initialize(Potition_latitude,Potition_longitude);
}
 
function errorCallback(error) {
message = "位置情報が許可されていません";
document.getElementById("area_name").innerHTML = message;
}
 
function initialize(x,y) {
document.getElementById("area_name").innerHTML
= 'google map情報を取得中';
 
var myLatlng = new google.maps.LatLng(x,y);
var mapOptions = {
zoom: 17,
center: myLatlng,
//mapTypeId: google.maps.MapTypeId.HYBRID
};

 
//map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
console.log("hoge");
var marker = new google.maps.Marker({
position: myLatlng,
map: map,
title:"Your position"
});
get_area_name(myLatlng);
}
 
function get_area_name(latLng_now){
var geocoder = new google.maps.Geocoder();
geocoder.geocode({latLng: latLng_now}, function(results, status){
if(status == google.maps.GeocoderStatus.OK){
document.getElementById("area_name").innerHTML
= results[0].formatted_address;
document.querySelector('#start').value = results[0].formatted_address;
} else {
}
});
}
