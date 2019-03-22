const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/46701200b7cc77ab83217b33e791d283/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. High Today - ' + body.daily.data[0].temperatureHigh + ', Low Today - ' + body.daily.data[0].temperatureLow + ' There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast