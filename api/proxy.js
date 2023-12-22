// api/proxy.js

const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const url = `https://www.tajbite.vercel.app${req.url}`;
  const response = await fetch(url, {
    method: req.method,
    headers: {
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers":
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    },
  });

  const data = await response.json();
  res.json(data);
};
