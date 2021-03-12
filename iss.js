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
      callback(`There was an error in retreiving your IP.\n ${err}`, null);
      return;
    }
    if (resp.serviceCode !== 200) {
      callback(`Status code ${resp.serviceCode} when retrieving IP. Response ${data}`, null);
      return;
    }
    const coords = {};
    coords["latitude"] = JSON.parse(data)["latitude"];
    coords["longitude"] = JSON.parse(data)["longitude"];
    callback(err,coords);
  });
};

module.exports = {fetchMyIP, fetchCoordsByIP};