
var a;
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
	preserveViewport: false
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
}



var x;
var y;
var ResLatitude;
var ResLongitude;
var rand;
var msg;
function decide(){
rand = Math.round(Math.random () * 6) + 1
	if(rand==1){
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目２２−４"; msg = "くりの木"; 
	}
	else if(rand==2){
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目２３−２";msg = "たつ吉";
	}
	else if(rand==3){
		x="〒223-0061、神奈川県横浜市港北区日吉2丁目1-8"; msg = "とんかつ三田";
	}
	else if(rand==4){
		x="神奈川県横浜市港北区日吉本町１丁目２０−５";msg = "銀屋";
	}
	else if(rand==5){
		x="神奈川県横浜市港北区日吉本町1丁目3−17"; msg = "GB’sカフェ";
	}
	else{
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目３−１９";msg = "武蔵屋";
	}
	alert(msg);
	get_Location();
}
var decideButton = document.querySelector("[data-role=decide]");
decideButton.addEventListener("click",decide);

function get_Location(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
	}
}

function successCallback(pos){
	var l=pos.coords.latitude;
	var g=pos.coords.longitude;
	Route2(l,g);
}

function errorCallback() {
	alert("gps error");
}
function Route2( l,g ) {
	var start= new google.maps.LatLng(l,g)
	 var request = {
 origin: start,
 destination: x,
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
open2();
}
function open2(){
	
	
	if(rand==1){
		var latlng = new google.maps.LatLng(35.552986,139.646392);
		var infowindow = new google.maps.InfoWindow({
    content: '<p>くりの木</p><p>定食屋</p>',
    position:latlng
  });
  infowindow.open(map);
	}
	else if(rand==2){
		var latlng = new google.maps.LatLng(35.552884,139.646072);
		var infowindow = new google.maps.InfoWindow({
    content: '<p>たつ吉</p><p>蕎麦屋</p>',
    position:latlng
  });
  infowindow.open(map);
}
  else if(rand==3){
	  var latlng = new google.maps.LatLng(35.55421,139.646933);
		var infowindow = new google.maps.InfoWindow({
    content: '<p>とんかつ三田</p><p>定食屋</p>',
    position:latlng
  });
  infowindow.open(map);
}
  else if(rand==4){
	  var latlng = new google.maps.LatLng(35.553098,139.645661);
		var infowindow = new google.maps.InfoWindow({
    content: '<p>銀屋</p><p>ラーメン</p>',
    position:latlng
  });
  infowindow.open(map);
}
  else if(rand==5){
	  var latlng = new google.maps.LatLng(35.554203,139.645642);
		var infowindow = new google.maps.InfoWindow({
    content: "<p>GB'sカフェ 2階です！</p><p>アメリカンフード</p>",
    position: latlng
  });
  infowindow.open(map);
}
  else{
	  var latlng = new google.maps.LatLng(35.554058,139.645572);
		var infowindow = new google.maps.InfoWindow({
    content: '<p>武蔵屋</p><p>ラーメン</p>',
    position: latlng
  });
 
  infowindow.open(map);
}

 console.log("hoge");

}





function go(){
	 
	
	a= Math.floor(Math.random()*6)+1;
	if(a==1){
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目２２−４"; msg = "くりの木"; 
	}
	else if(a==2){
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目２３−２";msg = "たつ吉";
	}
	else if(a==3){
		x="〒223-0061、神奈川県横浜市港北区日吉2丁目1-8"; msg = "とんかつ三田";
	}
	else if(a==4){
		x="神奈川県横浜市港北区日吉本町１丁目２０−５";msg = "銀屋";
	}
	else if(a==5){
		x="神奈川県横浜市港北区日吉本町1丁目3−17"; msg = "GB’sカフェ";
	}
	else{
		x="〒223-0062 神奈川県横浜市港北区日吉本町１丁目３−１９";msg = "武蔵屋";
	}
	alert (msg);
	getstart();
}
var GoButton = document.querySelector("[data-role=go]");
GoButton.addEventListener("click", go);

function getstart(){
	
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
open();
}

function open(){
	
	
	if(a==1){
		var latlng = new google.maps.LatLng(35.552986,139.646392);
		var infowindow = new google.maps.InfoWindow({
    content: '<p>くりの木</p><p>定食屋</p>',
    position:latlng
  });
  infowindow.open(map);
	}
	else if(a==2){
		var latlng = new google.maps.LatLng(35.552884,139.646072);
		var infowindow = new google.maps.InfoWindow({
    content: '<p>たつ吉</p><p>蕎麦屋</p>',
    position:latlng
  });
  infowindow.open(map);
}
  else if(a==3){
	  var latlng = new google.maps.LatLng(35.55421,139.646933);
		var infowindow = new google.maps.InfoWindow({
    content: '<p>とんかつ三田</p><p>定食屋</p>',
    position:latlng
  });
  infowindow.open(map);
}
  else if(a==4){
	  var latlng = new google.maps.LatLng(35.553098,139.645661);
		var infowindow = new google.maps.InfoWindow({
    content: '<p>銀屋</p><p>ラーメン</p>',
    position:latlng
  });
  infowindow.open(map);
}
  else if(a==5){
	  var latlng = new google.maps.LatLng(35.554203,139.645642);
		var infowindow = new google.maps.InfoWindow({
    content: "<p>GB'sカフェ 2階です！</p><p>アメリカンフード</p>",
    position: latlng
  });
  infowindow.open(map);
}
  else{
	  var latlng = new google.maps.LatLng(35.554058,139.645572);
		var infowindow = new google.maps.InfoWindow({
    content: '<p>武蔵屋</p><p>ラーメン</p>',
    position: latlng
  });
 
  infowindow.open(map);
}

 console.log("hoge");

}