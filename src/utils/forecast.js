const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=35d5a5de37e14ce57ef43268e8cbff95&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `It is currently ${body.current.temperature} out. It feels like ${body.current.feelslike} degrees out`);
        }
    })
}

module.exports = forecast;