slotsApp = {};


var settings = {
   "async": true,
   "crossDomain": true,
   "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Mississauga&limit=25",
   "method": "GET",
   "headers": {
      "Authorization": "Bearer GAMYzGkShejSRIXgbB988do_OXKkIjVLpZ4Zeb9VgPrRdZBGCY44fbsYsjzoh4IWsX1O8KLwLfbWu6o4BYy29jZp3nXs1SaUNhxHA2hCBWbJ6fJR0qhcjZ2ok27kXHYx",
      "User-Agent": "PostmanRuntime/7.13.0",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      "Postman-Token": "c1030027-5b1f-4caf-969d-84ec64666426,f9c8b243-f557-4cfc-9286-759a818cd6a1",
      // "Host": "api.yelp.com",
      // "accept-encoding": "gzip, deflate",
      // "Connection": "keep-alive",
      "cache-control": "no-cache"
   }
}

$.ajax(settings).done(function (response) {
   console.log(response);
});