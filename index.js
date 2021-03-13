const {nextISSTimesForMyLocation} = require('./iss');

nextISSTimesForMyLocation((error, passTimes) =>{
  if (error)  {
    console.log("Couldn't find times for ISS flying over your region");
    return;
  }
  for (const passTime of passTimes) {
    let date = new Date(passTime.risetime * 1000);
    console.log(`Next pass at ${date} for ${passTime.duration} seconds.`);
  }

});
