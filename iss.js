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
      return callback(err, body);
    }

    const IP = JSON.parse(body).ip;
    return callback(err, IP);
  });
};

module.exports = {fetchMyIP};