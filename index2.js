const {fetchMyIP, fetchCoordsByIP} = require('./iss_promised');

fetchMyIP()
.then(body => fetchCoordsByIP(body))
.then(body => {});