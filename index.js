const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

// const IP = fetchMyIP((err, ip) => {
//   if (err) {
//     console.log("There was an error\n", err);
//     return;
//   }
//   //console.log("Request worked, here is your IP:", ip);
//   return ip;
// });

// fetchCoordsByIP("174.7.106.49",(err,data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });


const flyOver = fetchISSFlyOverTimes({ latitude: 49.2476, longitude: -123.1234 }, (err, data) =>{
  if (err){
    console.log(err);
    return
  }
  console.log(data);
});
