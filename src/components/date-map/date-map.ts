import {Component, ElementRef, ViewChild} from '@angular/core';
import {Platform} from "ionic-angular";

/**
 * Generated class for the DateMapComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */

declare var google;

@Component({
  selector: 'date-map',
  templateUrl: 'date-map.html'
})
export class DateMapComponent {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      this.loadMap();
    });
    //
  }

  loadMap() {

    let latLng = new google.maps.LatLng(43.7784597, 11.236971);

    let styles = [{
      "featureType": "all",
      "elementType": "all",
      "stylers": [{
        "lightness": "29"
      }, {
        "invert_lightness": true
      }, {
        "hue": "#008fff"
      }, {
        "saturation": "-73"
      }]
    }, {
      "featureType": "all",
      "elementType": "labels",
      "stylers": [{
        "saturation": "-72"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [{
        "lightness": "32"
      }, {
        "weight": "0.42"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "labels",
      "stylers": [{
        "visibility": "on"
      }, {
        "lightness": "-53"
      }, {
        "saturation": "-66"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "lightness": "-86"
      }, {
        "gamma": "1.13"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry.fill",
      "stylers": [{
        "lightness": "0"
      }, {
        "gamma": "0.00"
      }, {
        "saturation": "0"
      }, {
        "color": "#0b0b0b"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "geometry.stroke",
      "stylers": [{
        "lightness": "5"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "labels.text.fill",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "weight": "0.84"
      }, {
        "gamma": "0.5"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "off"
      }, {
        "weight": "0.79"
      }, {
        "gamma": "0.5"
      }]
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }, {
        "lightness": "-78"
      }, {
        "saturation": "-91"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#080808"
      }, {
        "visibility": "simplified"
      }, {
        "lightness": "0"
      }, {
        "saturation": "0"
      }, {
        "gamma": "0.00"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.text",
      "stylers": [{
        "color": "#828282"
      }, {
        "lightness": "0"
      }, {
        "saturation": "0"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
        "lightness": "5"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [{
        "color": "#3f3f3f"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#8c8c8c"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [{
        "lightness": "10"
      }, {
        "gamma": "1"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [{
        "lightness": "10"
      }, {
        "saturation": "-100"
      }]
    }, {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "lightness": "-35"
      }]
    }, {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#919191"
      }]
    }, {
      "featureType": "transit.station.rail",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "transit.station.rail",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "on"
      }, {
        "hue": "#ff0000"
      }, {
        "saturation": "100"
      }, {
        "lightness": "0"
      }, {
        "gamma": "2.92"
      }, {
        "weight": "2.86"
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "saturation": "-97"
      }, {
        "lightness": "-14"
      }]
    }];

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: styles,
      zoomControl: false,
      panControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      scrollwheel: false
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    var hotels = [{
      latlng: new google.maps.LatLng("43.773837", "11.244872"),
      name: "GRAND HOTEL ADRIATICO"
    }, {
      latlng: new google.maps.LatLng("43.775958", "11.242246"),
      name: "HOTEL SINA VILLA MEDICI"
    }, {
      latlng: new google.maps.LatLng("43.774668", "11.241489"),
      name: "KRAFT HOTEL"
    }, {
      latlng: new google.maps.LatLng("43.774236", "11.247192"),
      name: "RIVOLI BOUTIQUE HOTEL"
    }, {
      latlng: new google.maps.LatLng("43.776692", "11.238169"),
      name: "STARHOTELS MICHELANGELO"
    }, {
      latlng: new google.maps.LatLng("43.791581", "11.223881"),
      name: "STARHOTELS TUSCANY"
    }, {
      latlng: new google.maps.LatLng("43.848494", "11.148625"),
      name: "STARHOTELS VESPUCCI"
    }];

    var infowindow = new google.maps.InfoWindow();

    var icon_hotel = 'assets/images/pin-map-hotel.png';
    var icon_white = 'assets/images/pin-map-white.png';

    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      icon: icon_white
    });

    google.maps.event.addListener(marker, 'click', (marker, index) => {
        return () => {
          infowindow.setContent('DaTE');
          infowindow.open(this.map, marker);
        }
      }
    );

    hotels.forEach((item) => {
      var newmarker = new google.maps.Marker({
        position: item.latlng,
        map: this.map,
        icon: icon_hotel,
        title: item.name
      });

      google.maps.event.addListener(newmarker, 'click', (marker, index) => {
          return () => {
            infowindow.setContent('' + item.name);
            infowindow.open(this.map, newmarker);
          }
        }
      );
    });



  }

}
