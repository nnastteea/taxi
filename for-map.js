function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
      center: new google.maps.LatLng(55.186, 30.201), // Широта и долгота Витебска
      zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }
  