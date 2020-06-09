ymaps.ready(init);
function init(){   
    var myMap = new ymaps.Map("map", {
        center: [53.938436, 27.603004],
        zoom: 14
    });

    myPlacemark = new ymaps.Placemark([53.938436, 27.603004],{ 
    	hintContent: 'Минск',
    	balloonContent: 'Столица белоруси'
  	}, {
			iconLayout: 'default#image',
			iconImageHref: 'ymap.png',
			iconImageSize: [30, 42],
			iconImageOffset: [-3, -42]
		});
    myMap.geoObjects.add(myPlacemark);

}