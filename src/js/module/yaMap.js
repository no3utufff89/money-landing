const setPlacemark = map  => {
  const windowWidth = window.innerWidth;
  var myPlacemark;

  if (windowWidth >= 728) {
    myPlacemark = new ymaps.Placemark(coordinates, {}, {
      iconLayout: 'default#image',
      iconImageHref: './assets/icons/location-mark.png',
      iconImageSize: [52, 52],
    });
  } else {
    myPlacemark = new ymaps.Placemark(coordinates, {}, {
      iconLayout: 'default#image',
      iconImageHref: './assets/icons/location-mark.png',
      iconImageSize: [42, 42],
    });
  }

  map.geoObjects.add(myPlacemark);
};

const coordinates = [55.791982, 37.589635];
await ymaps.ready(init);

async function init() {
  var myMap = new ymaps.Map("map", {
    center: coordinates,
    zoom: 17,
    controls: [],
  });

  setPlacemark(myMap);
};
