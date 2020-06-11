import { Component, ViewChild, ElementRef, OnInit, } from '@angular/core';
import { Covid19Service } from 'src/app/services/covid19-services.service';


declare var google: any;

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page implements OnInit {
  map: any;
  @ViewChild("map", { read: ElementRef, static: false }) mapRef: ElementRef;
  country: any;
  bounds: any;
  heatmap: any;
  heatMapData = [];
  defLat: any;
  defLng: any;
  arrInfo: any = [];
  markers: any = [
    {
      title: "National guards",
      latitude: " 9.4820",
      longtitude: "8.0753",
    },
    {
      title: "National Park",
      latitude: "33",
      longtitude: "65",
    },
    {
      title: "National Park",
      latitude: "41",
      longtitude: "20",
    },
  ];
  world: Object;

  constructor(private covid19service: Covid19Service) {}

  //ionic live cycle,
  ionViewDidEnter() {
    this.getAllInfo();
  }

  ionViewWillLeave() {
    this.showMap();
  }
  ngOnInit() {
    this.country = this.covid19service.countryData;
    console.log(this.country);
  }

  //
  getAllInfo() {
    this.showMap();
    this.covid19service.getCountyData().subscribe((data) => {
      this.country = data["info"];
      this.world = data;
      console.log(this.country);
      this.country = data;
      this.markers.forEach((element) => {
        this.setMarker(this.markers, element);
      });
      // this.bounds = new google.maps.LatLngBounds();
      // this.map.setZoom(6);
      //this.createHeatMap();
    });
  }

  //show map method
  showMap() {
    //const location = new google.maps.LatLng(-17.824858, 31.053028);
    let location = new google.maps.LatLng(
      this.defLat | 9.482,
      this.defLng | 8.0753
    );

    //map options
    const options = {
      center: location,
      zoom: 1,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      label: `${this.country}`,
    };
    // this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    //this.setMarker(this.markers);
    // this.countries.array.forEach(element => {
    //   this.setMarker(element.latitude, element.longtitude, element.name, element);
    //   this.map.fitBounds(this.bounds);
    // });
    // this.getAllInfo();
  }

  //set Marker
  //  setMarker(latd, long, name, countries)
  //  {
  //    this.marker = new google.maps.Marker({
  //      position: {lat: Number(latd), lng: Number(long)},
  //      animation: google.maps.Animation.DROP,
  //      label: `${countries.cases}`
  //    });
  //    //this.bounds.extend(this.marker.getPosition())
  //    this.marker.setMap(this.map);

  //    const visual = {location: new google.maps.LatLng(Number(latd), Number(long)), weight: Number(countries.cases)}
  //    this.heatMapData.push(visual);

  //    this.marker.addListener('click', () => {
  //      console.log(`marker ${countries.name} clicked`)
  //    });

  //  }

  setMarker(markers, world) {
    for (let marker of markers) {
      const position = new google.maps.LatLng(
        marker.latitude,
        marker.longtitude
      );
      const mapMarker = new google.maps.Marker({
        position: position,
        animation: google.maps.Animation.DROP,
        titile: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude,
        label: `${world.cases}`,
      });
      mapMarker.setMap(this.map);
      this.addDataOnMap(mapMarker);
    }
  }
  addDataOnMap(marker) {
    let windowContent =
      '<div id = "content">' +
      '<h2 id = "firstHeading" class "firstHeading">' +
      marker.title +
      "</h2>" +
      "<p> Latitude: " +
      marker.latitude +
      "</p>" +
      "<p> Longitude: " +
      marker.longitude +
      "</p>" +
      "</div>";
    let infoWindow = new google.maps.InfoWindow({
      content: windowContent,
    });

    marker.addListener("click", () => {
      this.closeWindow();
      infoWindow.open(this.map, marker);
    });
    this.arrInfo.push(infoWindow);
  }

  //close window
  closeWindow() {
    for (let window of this.arrInfo) {
      window.close();
    }
  }
  //visiualize the data
  createHeatMap() {
    this.heatmap = new google.maps.visiualization.HeatmapLayer({
      info: this.heatMapData,
    });
    this.heatmap.setMap(this.map);
    //this.heatmap.set('radius', this.heatmap.get('radius') ? null:50);
    console.log(this.heatMapData);
  }

  //     //visiualize the data
  //  getCircle(magnitude)
  //     {
  //       return{
  //         path: google.maps.SymbolPath.CIRCLE,
  //         fillColor: 'red',
  //         fillOpacity:0.2,
  //         scale: Math.pow(2, magnitude)/2,
  //         strokeColor: 'white',
  //         strokeWeight: 0.5
  //       };
  //     }
}
