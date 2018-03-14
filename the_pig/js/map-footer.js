$(document).ready(function() {
    initMap();
});

function initMap() {
    var uluru = {lat: 40.7609285, lng: -111.8920536};
    var map = new google.maps.Map(document.getElementById('map-footer'), {
      zoom: 14,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}
//<script async defer
//src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4eaFIZjEFVyTS2IqNtCbIL4960EfhByw&callback=initMap">
//</script>