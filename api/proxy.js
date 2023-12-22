import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://tajbite.vercel.app/dapi/restaurants/list/v5?lat=15.3803485&lng=73.8349952&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    console.log(res.json(response.data));
  } catch (error) {
    console.log(error);
  }
}
