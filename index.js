function updateMap() {
  console.log("updating map without realtime data");

  fetch("/data.json")
    .then((res) => res.json())
    .then((info) => {
      console.log(info);
      info.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.infected;
        if (cases > 255) {
          var marker = new mapboxgl.Marker({
            draggable: false,
            color: "rgb(255, 0, 0)",
          })
            .setLngLat([longitude, latitude])
            .addTo(map);
        } else {
          var marker = new mapboxgl.Marker({
            draggable: false,
            color: `rgb(${cases}, 0, 0)`,
          })
            .setLngLat([longitude, latitude])
            .addTo(map);
        }

        // Mark on the map
        // var marker = new mapboxgl.Marker({
        //   draggable: false,
        // //   color: "rgb(132, 121, 129)"
        // })
        //   .setLngLat([longitude, latitude])
        //   .addTo(map);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// updateMap();

let interval = 20000;

setInterval(updateMap(), interval);
