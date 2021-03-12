const {fetchMyIP, fetchCoordsByIP} = require('./iss');

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