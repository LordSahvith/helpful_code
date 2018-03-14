$(document).ready(function() {
    initHeroMap();
});

function initHeroMap() {
    var uluru = {lat: 40.7609285, lng: -111.8920536};
    var map = new google.maps.Map(document.getElementById('map-contact'), {
      zoom: 14,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}
//<script async defer
//src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwlP7C-DXRvVnmnFlFoA1vQx_ULK74L5A&callback=initHeroMap">
//</script>