slotApp = {};

slotApp.koreanTorontoURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Toronto&categories=korean&limit=50';
slotApp.koreanMississauagaURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Mississauga&categories=korean&limit=50';
slotApp.mexicanTorontoURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Toronto&categories=mexican&limit=50';
slotApp.mexicanMississaugaURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Mississauga&categories=mexican&limit=50';

slotApp.koreanToronto;
slotApp.koreanMississauga;
slotApp.mexicanToronto;
slotApp.mexicanMississauga;

// AJAX call for Korean Restaurants in Toronto
slotApp.koreanToronto = $.ajax({
   async: true,
   crossDomain: true,
   url: slotApp.koreanTorontoURL,
   method: "GET",
   headers: {
      Authorization: "Bearer GAMYzGkShejSRIXgbB988do_OXKkIjVLpZ4Zeb9VgPrRdZBGCY44fbsYsjzoh4IWsX1O8KLwLfbWu6o4BYy29jZp3nXs1SaUNhxHA2hCBWbJ6fJR0qhcjZ2ok27kXHYx",
      UserAgent: "PostmanRuntime/7.13.0",
      Accept: "*/*",
      CacheControl: "no-cache",
      PostmanToken: "c1030027-5b1f-4caf-969d-84ec64666426,f9c8b243-f557-4cfc-9286-759a818cd6a1",
      cacheControl: "no-cache"
   }
});

// AJAX call for Korean Restaurants in Mississauga
slotApp.koreanMississauga = $.ajax({
   async: true,
   crossDomain: true,
   url: slotApp.koreanMississauagaURL,
   method: "GET",
   headers: {
      Authorization: "Bearer GAMYzGkShejSRIXgbB988do_OXKkIjVLpZ4Zeb9VgPrRdZBGCY44fbsYsjzoh4IWsX1O8KLwLfbWu6o4BYy29jZp3nXs1SaUNhxHA2hCBWbJ6fJR0qhcjZ2ok27kXHYx",
      UserAgent: "PostmanRuntime/7.13.0",
      Accept: "*/*",
      CacheControl: "no-cache",
      PostmanToken: "c1030027-5b1f-4caf-969d-84ec64666426,f9c8b243-f557-4cfc-9286-759a818cd6a1",
      cacheControl: "no-cache"
   }
});

// AJAX call for Mexican Restaurants in Toronto
slotApp.mexicanToronto = $.ajax({
   async: true,
   crossDomain: true,
   url: slotApp.mexicanTorontoURL,
   method: "GET",
   headers: {
      Authorization: "Bearer GAMYzGkShejSRIXgbB988do_OXKkIjVLpZ4Zeb9VgPrRdZBGCY44fbsYsjzoh4IWsX1O8KLwLfbWu6o4BYy29jZp3nXs1SaUNhxHA2hCBWbJ6fJR0qhcjZ2ok27kXHYx",
      UserAgent: "PostmanRuntime/7.13.0",
      Accept: "*/*",
      CacheControl: "no-cache",
      PostmanToken: "c1030027-5b1f-4caf-969d-84ec64666426,f9c8b243-f557-4cfc-9286-759a818cd6a1",
      cacheControl: "no-cache"
   }
});

// AJAX call for Mexican Restaurants in Mississauga
slotApp.mexicanMississauga = $.ajax({
   async: true,
   crossDomain: true,
   url: slotApp.mexicanMississaugaURL,
   method: "GET",
   headers: {
      Authorization: "Bearer GAMYzGkShejSRIXgbB988do_OXKkIjVLpZ4Zeb9VgPrRdZBGCY44fbsYsjzoh4IWsX1O8KLwLfbWu6o4BYy29jZp3nXs1SaUNhxHA2hCBWbJ6fJR0qhcjZ2ok27kXHYx",
      UserAgent: "PostmanRuntime/7.13.0",
      Accept: "*/*",
      CacheControl: "no-cache",
      PostmanToken: "c1030027-5b1f-4caf-969d-84ec64666426,f9c8b243-f557-4cfc-9286-759a818cd6a1",
      cacheControl: "no-cache"
   }
});

$.when(slotApp.koreanToronto, slotApp.koreanMississauga, slotApp.mexicanToronto, slotApp.mexicanMississauga)
   .then((resultOfKoreanToronto, resultOfKoreanMississauga, resultOfMexicanToronto, resultOfMexicanMississauga) => {
      console.log(resultOfKoreanToronto);
      console.log(resultOfKoreanMississauga);
      console.log(resultOfMexicanToronto);
      console.log(resultOfMexicanMississauga);


   })
   .fail((err1, err2, err3, err4) => {
      console.log(err1, err2, err3, err4);
   });

slotApp.randomGenerator = function() {
   return Math.floor(Math.random() * slotApp.koreanToronto.responseJSON.businesses.length;
}


slotApp.init = function () {
   console.log(slotApp.koreanToronto);
}





$(function () {
   slotApp.init();
   console.log(slotApp.randomGenerator());
});