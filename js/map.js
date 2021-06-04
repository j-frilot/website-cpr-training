function initMap() {
    let options = {
        zoom: 8,
        center: { lat: 30.0666, lng: -90.4801 }
    };

    let map = new google.maps.Map(document.getElementById("map"), options);

    // let marker = new google.maps.Marker({
    //     position:{lat: 30.053820, lng: -90.460910},
    //     map:map
    // })

    // let infoWindow = new google.maps.InfoWindow({
    //     content:"<h1>Calebra's</h1>"
    // })

    // marker.addListener('click', () => {
    //     infoWindow.open(map, marker)
    // })

    const addMarker = (coords) => {
        let marker = new google.maps.Marker({
            position: { lat: 30.05382, lng: -90.46091 },
            content: "<h1>Calebra's</h1>"
        });
    };
    addMarker({ lat: 30.05382, lng: -90.46091 });
}
