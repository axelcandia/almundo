function initMap(){
var input = document.getElementById('checkout_shipping_address_address1');
    var autocomplete = new google.maps.places.Autocomplete(input);
}


function require(url) {
    var e = document.createElement("script");
    e.src = url;
    e.type = "text/javascript";
    e.addEventListener('load', initMap);
    document.getElementsByTagName("head")[0].appendChild(e);
}

require("https://maps.googleapis.com/maps/api/js?key=AIzaSyAybfSVih3NyMkHZaVIVWghNupx0dXG7pU&libraries=places&callback=initMap");
