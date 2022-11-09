interface City {
  center: google.maps.LatLngLiteral;
  revenue: number;
}

const citymap: Record<string, City> = {
  Fremont: {
    center: { lat: 37.542571, lng: -121.993037 },
    revenue:  10000000,
  },
  
  Newark: {
    center: { lat: 37.525400, lng: -122.037764 },
    revenue:  3000000,
  },
  
  Unioncity: {
    center: { lat: 37.587546, lng: -122.066716 },
    revenue:   120000000,
  },
  
  Hayward: {
    center: { lat: 37.660284, lng: -122.089396 },
    revenue:  5000000,
  },
  
  SanCarlos: {
    center: { lat: 37.492686, lng: -122.249346 },
    revenue:  3002000,
  },
  
  SantaCruzCounty: {
    center: { lat: 37.007888, lng: -122.067355 },
    revenue:  88999090,
  },
  
  SantaClaraCounty: {
    center: { lat:  37.113164, lng: -121.651485 },
    revenue:  88999090,
  },
  
  Pleasanton: {
    center: { lat: 37.638625, lng: -121.911430 },
    revenue:  1000000,
  },
  
  Pacifica: {
    center: { lat: 37.594870, lng: -122.473562 },
    revenue:  50000,
  },
  
  Gilroy: {
    center: { lat: 36.995174, lng: -121.602745 },
    revenue:  50000,
  },

};

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 8,
      center: { lat: 37.3435, lng: -121.9455 },
      mapTypeId: "terrain",
    }
  );
  
  const redicon = {
    url: "https://i.postimg.cc/wRKk9Vrs/red.png",
    scaledSize: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0) 
    };
    
    const redflag =
    "https://i.postimg.cc/wRKk9Vrs/red.png";
    const redmarker = new google.maps.Marker({
    position: { lat: 37.527798, lng: -122.312989 },
    map,
    icon: redicon,
  });
    
  const red = {
    url: "https://i.postimg.cc/wRKk9Vrs/red.png",
    scaledSize: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0) 
    };
  
    const red2flag =
    "https://i.postimg.cc/wRKk9Vrs/red.png";
    const red2marker = new google.maps.Marker({
    position: { lat: 37.006852, lng: -122.064148 },
    map,
    icon: red,
  });
  
  const blueicon = {
    url: "https://i.postimg.cc/tZsrq7C8/blue.png",
    scaledSize: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0) 
    };
    
    const blueflag =
    "https://i.postimg.cc/tZsrq7C8/blue.png";
    const bluemarker = new google.maps.Marker({
    position: { lat: 37.344717, lng: -121.9796664 },
    map,
    icon: blueicon,
  });
  
  const whiteicon = {
    url: "https://i.postimg.cc/kVpcp9Fs/white.png",
    scaledSize: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0) 
    };
    
    const whiteflag =
    "https://i.postimg.cc/kVpcp9Fs/white.png";
    const greenmarker = new google.maps.Marker({
    position: { lat: 37.753038, lng: -122.4231984 },
    map,
    icon: whiteicon,
  });
    
  

  for (const city in citymap) {
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFFF00",
      fillOpacity: 0.35,
      map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].revenue) * 5,
    });
    
    const greenicon = {
    url: "https://i.postimg.cc/xJNRr762/green.png",
    scaledSize: new google.maps.Size(40, 40),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0) 
    };
    
    const greenflag =
    "https://i.postimg.cc/xJNRr762/green.png";
    const greenmarker = new google.maps.Marker({
    position: citymap[city].center,
    map,
    icon: greenicon,
  });
  }
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
