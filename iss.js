const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = (callback) => {
  request('https://api.ipify.org?format=json', (err,resp, body) => {
    if (err) {
      callback(err, null);
      return;
    }

    //assuming server error if non-200 code
    if (resp.statusCode !== 200) {
      const msg = `Status Code ${resp.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const IP = JSON.parse(body).ip;
    callback(err, IP);
  });
};


  const fetchCoordsByIP = (ip, callback) => {
    request(`https://freegeoip.app/json/${ip}`, (err, resp, data) =>{
      if (err) {
        callback(`There was an error in retrieving your IP.\n ${err}`, null);
        return;
      }
      if (resp.statusCode !== 200) {
        callback(Error(`Status code ${resp.statusCode} when retrieving IP. Response ${data}`), null);
        return;
      }
      const coords = {};
      coords["latitude"] = JSON.parse(data)["latitude"];
      coords["longitude"] = JSON.parse(data)["longitude"];
      callback(null,coords);
    });
  };



const fetchISSFlyOverTimes = (coords, callback) => {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, 
  (err, resp, body) => {
    if (err){
      callback(`There was an error.\n ${err}`, null);
      return
    }
    if(resp.statusCode !== 200){
      callback(Error(`Status code ${resp.statusCode}\n ${body}`), null)
      return
    }
    
    const response = JSON.parse(body).response
    callback(null, response);
  });
};

module.exports = {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes};