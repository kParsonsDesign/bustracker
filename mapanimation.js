window.onload = () => {
mapboxgl.accessToken =
  'pk.eyJ1Ijoia21wMTA5IiwiYSI6ImNsMWRybW0wZTA3MHMzcXA4NjhkYnhhMDkifQ.S18q4Vqu3DnCyZL8k5lcRA';

// create map
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.3656],
  zoom: 13.9,
});

// add map navigation controls
const nav = new mapboxgl.NavigationControl({
  visualizePitch: false, // default
  showCompass: false, // remove compass control
  showZoom: true, // default
});
map.addControl(nav, 'bottom-right');

map.on('load', () => {
  // add route 1 out line data
  map.addSource('route-1-out-line', {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'geometry': {
        'type': 'LineString',
        'coordinates': [
          [-71.091545, 42.355034],
          [-71.093291, 42.358633],
          [-71.093657, 42.359158],
          [-71.094166, 42.359667],
          [-71.094874, 42.360139],
          [-71.097543, 42.361755],
          [-71.100541, 42.363509],
          [-71.104021, 42.365597],
          [-71.107701, 42.367858],
          [-71.108767, 42.368382],
          [-71.109427, 42.368687],
          [-71.110287, 42.369012],
          [-71.112632, 42.36986],
          [-71.1131, 42.370236],
          [-71.113684, 42.370656],
          [-71.115541, 42.37217],
          [-71.116126, 42.372627],
          [-71.118162, 42.373196]
        ]
      }
    }
  });
  // display route 1 out line on map
  map.addLayer({
    'id': 'route-1-out-line',
    'type': 'line',
    'source': 'route-1-out-line',
    'paint': {
      'line-color': '#ffc72c',
      'line-width': 4,
    }
  });
  // add route 1 out stops data
  map.addSource('route-1-out-stops', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [
        {
          "type": "Feature",
          "properties": {
            "title": "Massachusetts Ave @ Memorial Dr"
          },
          "geometry": {
            "coordinates": [-71.092734, 42.357613],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "title": "77 Massachusetts Ave"
          },
          "geometry": {
            "coordinates": [-71.093544, 42.359183],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "title": "Massachusetts Ave @ Albany St"
          },
          "geometry": {
            "coordinates": [
              -71.095704,
              42.360756
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "title": "Massachusetts Ave @ Front St"
          },
          "geometry": {
            "coordinates": [
              -71.097511,
              42.361771
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "title": "Massachusetts Ave @ Sidney St"
          },
          "geometry": {
            "coordinates": [
              -71.099353,
              42.362947
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "title": "Massachusetts Ave @ Prospect St"
          },
          "geometry": {
            "coordinates": [
              -71.103366,
              42.365318
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "title": "Massachusetts Ave @ Bigelow St"
          },
          "geometry": {
            "coordinates": [
              -71.105841,
              42.366812
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "title": "Massachusetts Ave @ Hancock St"
          },
          "geometry": {
            "coordinates": [
              -71.108619,
              42.368389
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "title": "Massachusetts Ave @ Dana St"
          },
          "geometry": {
            "coordinates": [
              -71.110771,
              42.369266
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "title": "Massachusetts Ave @ Trowbridge St"
          },
          "geometry": {
            "coordinates": [
              -71.112999,
              42.37027
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "title": "Massachusetts Ave @ Quincy St"
          },
          "geometry": {
            "coordinates": [
              -71.115463,
              42.372192
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "title": "Massachusetts Ave @ Holyoke St",
            "endpoint": "TRUE"
          },
          "geometry": {
            "coordinates": [
              -71.118143,
              42.373232
            ],
            "type": "Point"
          }
        }
      ]
    }
  });
  // display route 1 out stops on map
  map.addLayer({
    'id': 'route-1-out-stops',
    'type': 'circle',
    'source': 'route-1-out-stops',
    'paint': {
      'circle-color': '#4264fb',
      'circle-radius': 6,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff'
    }
  });

  // create popup, but don't add it to the map yet
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });
  map.on('mouseenter', 'route-1-out-stops', (e) => {
    // change the cursor style as a UI indicator
    map.getCanvas().style.cursor = 'pointer';

    // copy coordinates array
    const coordinates = e.features[0].geometry.coordinates.slice();
    const title = e.features[0].properties.title;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates).setHTML(title).addTo(map);
  });
  map.on('mouseleave', 'route-1-out-stops', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });
});//end map.on('load')




// add markers for each bus to map with popup information
let allMarkers = [];
function mapBuses(bus) {
  const el = document.createElement('div');
  const width = 50;
  const height = 60;
  el.innerHTML = `<svg viewBox="0 0 50 60"><defs><style>.inner{fill:#fff;}.outer{fill:blue;}</style></defs><g id="triangle"><path class="inner" d="M46.93,57c-6.68-1.81-14.19-2.75-21.93-2.75s-15.24,.95-21.93,2.75C6.48,48.11,17.12,23.2,25,5.02c7.88,18.18,18.52,43.09,21.93,51.98Z" /><path class="outer" d="M25,10.06c6.67,15.44,14.71,34.27,18.66,44.1-5.84-1.25-12.17-1.91-18.66-1.91s-12.81,.65-18.66,1.9c3.95-9.82,11.99-28.65,18.66-44.1m0-10.06S-1.09,60,.04,60h.01c7.49-2.5,16.22-3.75,24.95-3.75s17.47,1.25,24.95,3.75h.01c1.13,0-24.96-60-24.96-60h0Z" /></g></svg>`;
  el.className = 'marker';
  el.style.width = `${width * .5}px`;
  el.style.height = `${height * .5}px`;
  el.firstChild.style.transform = `rotate(${bus.bearing}deg)`;
  /*el.addEventListener('mouseover', () => {

  });*/

  const popup = new mapboxgl.Popup()
    .setHTML(`<h5>Route ${bus.route} to ${bus.headsign}</h5>`);
  
  let marker = new mapboxgl.Marker(el)
    .setLngLat([bus.longitude, bus.latitude])
    .setPopup(popup)
    .addTo(map);
  allMarkers.push(marker);
  // future update: fix bus bearing no information
  // console.log(bus.bearing);
}

// build bus data from json included and data
function updateBuses(json) {
  let busses = [];
  let included = json.included;
  let data = json.data;
  included.forEach((e) => {
    let bus = {};
    bus.id = e.id;
    bus.direction_id = e.attributes.direction_id;
    bus.headsign = e.attributes.headsign;
    bus.service = e.relationships.service.data.id;
    bus.block_id = e.attributes.block_id;
    busses.push(bus);
  });
  data.forEach((e) => {
    let id = e.relationships.trip.data.id;
    let index = busses.findIndex((bus) => {return bus.id === id});
    let bus = busses[index];
    bus.bearing = e.attributes.bearing;
    bus.latitude = e.attributes.latitude;
    bus.longitude = e.attributes.longitude;
    bus.current_stop_sequence = e.attributes.current_stop_sequence;
    bus.label = e.attributes.label;
    bus.route = e.relationships.route.data.id;
    bus.stop = e.relationships.stop.data.id;
  });
  // remove previously drawn markers
  allMarkers.forEach((marker) => {marker.remove()});
  // add markers for busses
  busses.forEach(mapBuses);
}

// on page countdown to next update
let timer;
let counter;
let countspan = document.getElementById('countdown');

function countdown() {
  if (timer != undefined || timer != null) {
    clearInterval(timer);
    timer = null;
  }
  counter = 15;
  
  function runcountdown() {
    counter -= 1;
    countspan.innerText = `${counter}`;
  }
  timer = setInterval(runcountdown , 1000);
}

async function run() {
  // get bus data
  const json = await getBusInformation();
  updateBuses(json);

  // update countdown on page
  countdown();

  // timer
  // don't call mbta too often
  // (15 seconds lets them know you are not trying denial of service attack)
  setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusInformation() {
  const url =
    'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

run();

}
