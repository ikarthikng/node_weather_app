const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://us1.locationiq.com/v1/search.php?key=434b93370a37eb&q=' + address + '&format=json'

    request({ url, json: true }, (error, { body }) => {
        console.log(body);
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body[0].lat,
                longitude: body[0].lon,
                location: body[0].display_name
            })
        }
    })
}

module.exports = geocode