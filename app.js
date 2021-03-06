function initMap(){
  //create an array of markers we can add to
  var markers = [
    {
      coords:{lat:33.9550935, lng:-118.3714872},
      content:'<h1>Terreno 630 Glasgow LLC</h1><br><p><strong>Purchase Price ($MM): </strong>$4.1</p><br><p><strong>Square Footage: </strong> 27,505 sqft</p><br><p><strong>Cost/PSF: </strong>$149/PSF</p><br><p><strong>Description:</strong></p><p>Airfreight distribution building adjacent to Los Angeles International Airport.</p>'
    },
    {
      coords:{lat:33.8527919, lng:-118.2869209},
      content:'<h1>Terreno 19601 Hamilton LLC</h1><br><p><strong>Purchase Price ($MM): </strong>$12.3</p><br><p><strong>Square Footage: </strong> 72,808 sqft</p><br><p><strong>Cost/PSF: </strong>$169/PSF</p><br><p><strong>Description:</strong></p><p>Warehouse/distribution building on 5.4 acres located in Torrance. Excess land provides significant trailer storage and expansion potential.</p>'
    },
    {
      coords:{lat:33.9852297, lng:-118.1390866},
      content:'<h1>Terreno Garfield LLC</h1><br><p><strong>Purchase Price ($MM): </strong>$52.4</p><br><p><strong>Square Footage: </strong> 545,299 sqft</p><br><p><strong>Cost/PSF: </strong>$96/PSF</p><br><p><strong>Description:</strong></p><p>Three multi-tenant, warehouse/distribution and two flex buildings centrally located in Commerce, under a quarter of a mile from Interstates 5 and 710.</p>'
    },
    {
      coords:{lat:33.888028, lng:-118.366851},
      content:'<h1>Terreno Manhattan Beach LLC</h1><br><p><strong>Purchase Price ($MM): </strong>$14.1</p><br><p><strong>Square Footage: </strong> 103,200 sqft</p><br><p><strong>Cost/PSF: </strong>$137/PSF</p><br><p><strong>Description:</strong></p><p>Warehouse/distribution building in the South Bay Industrial submarket adjacent to Interstate 405 and four miles south of Los Angeles International Airport.</p>'
    },
    {
      coords:{lat:33.8764737, lng:-118.2741064},
      content:'<h1>Terreno South Main LLC</h1><br><p><strong>Purchase Price ($MM): </strong>$39.3</p><br><p><strong>Square Footage: </strong> 210,000 sqft</p><br><p><strong>Cost/PSF: </strong>$161/PSF</p><br><p><strong>Description:</strong></p><p>One newly constructed front-load industrial distribution building located in the South Bay submarket, adjacent to Highway 91 and Interstate 110, between Los Angeles International Airport and the Ports of Los Angeles and Long Beach.</p>'
    },
    {
      coords:{lat:33.8987567, lng:-118.2794303},
      content:'<h1>Terreno 14611 Broadway LLC</h1><br><p><strong>Purchase Price ($MM): </strong>$6.0</p><br><p><strong>Square Footage: </strong> 40,000 sqft</p><br><p><strong>Cost/PSF: </strong>$150/PSF</p><br><p><strong>Description:</strong></p><p>Warehouse/distribution building, with trailer storage, adjacent to Interstate 110, midway between the Ports of Los Angeles, Long Beach and Los Angeles International Airport.</p>'
    },
    {
      coords:{lat:33.9536583, lng:-118.3722633},
      content:'<h1>Terreno 747 Glasgow LLC</h1><br><p><strong>Purchase Price ($MM): </strong>$3.5</p><br><p><strong>Square Footage: </strong> 19,326 sqft</p><br><p><strong>Cost/PSF: </strong>$181/PSF</p><br><p><strong>Description:</strong></p><p>Multi-tenant, airfreight building one mile north of Los Angeles International Airport with easy access to Interstates 405 and 105.</p>'
    },
    {
      coords:{lat:33.8688229, lng:-118.2101721},
      content:'<h1>Terreno Las Hermanas LLC</h1><br><p><strong>Purchase Price ($MM): </strong>$4.0</p><br><p><strong>Square Footage: </strong> 23735 sqft</p><br><p><strong>Cost/PSF: </strong>$169/PSF</p><br><p><strong>Description:</strong></p><p>Warehouse/distribution building and paved yard centrally located in the City of Compton south of Route 91, near Interstates 110, 405 and 710 between the Ports of LA/Long Beach and the Los Angeles International Airport.</p>'
    },
    {
      coords:{lat:33.8752216, lng:-118.2741318},
      content:'<h1>Terreno South Main II</h1><br><p><strong>Purchase Price ($MM): </strong>N/A</p><br><p><strong>Square Footage: </strong> 33,769 sqft</p><br><p><strong>Cost/PSF: </strong>N/A</p><br><p><strong>Description:</strong></p><p>One renovated office building near the intersection of I-110 and the Artesia Freeway, equidistant from Los Angeles International Airport and the ports of LA and Long Beach and immediately adjacent to Terreno Realty Corporation???s newly constructed South Main property.</p>'
    },
    {
      coords:{lat:33.9545626, lng:-118.3740893},
      content:'<h1>709 Hindry LLC</h1><br><p><strong>Purchase Price ($MM): </strong>5.2</p><br><p><strong>Square Footage: </strong> 22,239 sqft</p><br><p><strong>Cost/PSF: </strong>$234/PSF</p><br><p><strong>Description:</strong></p><p>One industrial distribution building on 0.9 acres west of Interstate 405 and adjacent to Los Angeles International Airport.</p>'
    }
  ];


  var options = {
    // zoom level and starting location for map
    zoom:9,
    center: markers[0].coords,
  }
  // function creates a new map in the div with the ID 'map' and uses our options
  var map = new google.maps.Map(document.getElementById('map'), options);

  //listen for click on map
  google.maps.event.addListener(map, 'click', function(event) {
    //Add Marker
    addMarker({coords:event.latLng});
  });



  /* below is hardcoding a marker and info window
  // create a new marker for the map
  var marker = new google.maps.Marker({
    position: {lat:37.9101, lng:-122.0652},
    map:map,
    // you can change these up from the google docs here
    // https://developers.google.com/maps/documentation/javascript/examples/icon-simple?hl=en
    icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  })


  //crete an info window for marker above
  var infoWindow = new google.maps.InfoWindow({
    content:'<h1>Walnut Creek</h1>'
  });
  //create the event listener when there is a click on the marker to open the info window
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
  */


  //loop through markers
  for(var i=0; i < markers.length; i++){
    //adds marker
    addMarker(markers[i]);
  }



  //Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
    position: props.coords,
    map:map,
    // you can change these up from the google docs here
    // https://developers.google.com/maps/documentation/javascript/examples/icon-simple?hl=en
    // icon: props.iconImage
  });

  //check for custom icon
  if(props.iconImage){
    //set icon image
    marker.setIcon(props.iconImage);
  }

  //check content
  if(props.content){
    var infoWindow = new google.maps.InfoWindow({
      content:props.content
    });

    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });
  }
}
}