const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

export const MENU_API =
  corsAnywhereUrl +
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.3803485&lng=73.8349952&restaurantId=";

export const API_DATA =
  corsAnywhereUrl +
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.3803485&lng=73.8349952&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const API_DATA_MOBILE =
  corsAnywhereUrl +
  "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=15.3803485&lng=73.8349952&carousel=true&third_party_vendor=1";

export const API_DATA2 =
  "/dapi/restaurants/list/v5?lat=15.5412934&lng=73.75733919999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const MOBILE_MENU_DATA =
  "/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.3803485&lng=73.8349952&restaurantId=329793&isMenuUx4=true&submitAction=ENTER";

export const SEARCH_API_D =
  corsAnywhereUrl +
  "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=15.3803485&lng=73.8349952&str=";

//? Search By keyboard
export const SEARCH_BY_ENTER =
  corsAnywhereUrl +
  "https://www.swiggy.com/dapi/restaurants/search/v3?lat=15.3803485&lng=73.8349952&str=";

export const SEARCH_BY_ENTER_2 = "&trackingId=null&submitAction=ENTER";
export const SEARCH_BY_ENTER_2_RESTAURANT =
  "&trackingId=null&submitAction=ENTER&selectedPLTab=RESTAURANT";

export const SEARCH_BY_ENTER_2_DISH =
  "&trackingId=null&submitAction=ENTER&selectedPLTab=DISH";

//? Search by click
export const SEARCH_BY_CLICK =
  corsAnywhereUrl +
  "https://www.swiggy.com/dapi/restaurants/search/v3?lat=15.3803485&lng=73.8349952&str=";
export const SEARCH_BY_CLICK_2 = "&submitAction=SUGGESTION&";

//?image
export const RESTAURANT_IMAGE = "";
// " https://i.postimg.cc/DyYQd6J9/pixlr-image-generator-56ecd33b-1e1f-4d1a-9805-e41153bb03d7.png";
export const HERO_IMAGE = "";
// (" https://i.postimg.cc/nh2zFMsL/pixlr-image-generator-91feb445-215c-459d-acee-731ae3316aa9.png");
export const RESTUARATANT_IMAGE =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const CAROUSEL_IMAGE =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
export const MENU_IMAGE =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const SEARCH_ITEMS_IMAGE =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/";

export const DISPLAY_RESULT_IMAGE =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
