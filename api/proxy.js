// api/proxy.js

const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    const url = `https://www.tajbite.vercel.app${req.url}`;
    const response = await fetch(url, {
      method: req.method,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Accept, Content-Type",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    
    console.log(error);
    
  }
};