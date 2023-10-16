var app = angular.module('historicalPlaceApp');

app.factory('historicalPlaceModel', function() {
    var historicalPlaces = [
        {
            name: 'Great Wall of China',
            location: 'China',
            history: 'The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, and other materials, built along the northern borders of China to protect against invasions by nomadic groups.',
            image: 'great_wall.jpg'
        },
        {
            name: 'Machu Picchu',
            location: 'Peru',
            history: 'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Machupicchu District, Urubamba Province, Cusco Region, above the Sacred Valley.',
            image: 'machu_picchu.jpg'
        },
        // Add more historical places as needed
    ];

    return {
        getHistoricalPlaces: function() {
            return historicalPlaces;
        }
    };
});
