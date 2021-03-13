const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss_promised');

nextISSTimesForMyLocation((body) => { const passTimes = JSON.parse(body).response
  for (const passTime of passTimes){
    let date = new Date(passTime.risetime);
    let duration = passTime.duration;
    console.log(`Next pass ${date} for ${duration} seconds.`)
  }
});
