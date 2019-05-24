slotApp = {};

// aMyI7YRYlTRVSrH0cgC2ZHCbcDtSW9w2J9AmZaryuRpHgD3boyh_Pw9cFvvnw20d_znLBbJGDixK3rbXueOzK8Oh05xT1HBQSlKvuMiRxMbMPEnZjzsRc_ - XlybnXHYx

// GAMYzGkShejSRIXgbB988do_OXKkIjVLpZ4Zeb9VgPrRdZBGCY44fbsYsjzoh4IWsX1O8KLwLfbWu6o4BYy29jZp3nXs1SaUNhxHA2hCBWbJ6fJR0qhcjZ2ok27kXHYx

slotApp.koreanTorontoURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Toronto&categories=korean&limit=50';
slotApp.koreanMississauagaURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Mississauga&categories=korean&limit=50';
slotApp.mexicanTorontoURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Toronto&categories=mexican&limit=50';
slotApp.mexicanMississaugaURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Mississauga&categories=mexican&limit=50';

slotApp.koreanToronto;
slotApp.koreanMississauga;
slotApp.mexicanToronto;
slotApp.mexicanMississauga;
slotApp.modArray = [];

// AJAX call for Korean Restaurants in Toronto
slotApp.koreanToronto = $.ajax({
   async: true,
   crossDomain: true,
   url: slotApp.koreanTorontoURL,
   method: "GET",
   headers: {
      Authorization: "Bearer aMyI7YRYlTRVSrH0cgC2ZHCbcDtSW9w2J9AmZaryuRpHgD3boyh_Pw9cFvvnw20d_znLBbJGDixK3rbXueOzK8Oh05xT1HBQSlKvuMiRxMbMPEnZjzsRc_-XlybnXHYx",
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
      Authorization: "Bearer aMyI7YRYlTRVSrH0cgC2ZHCbcDtSW9w2J9AmZaryuRpHgD3boyh_Pw9cFvvnw20d_znLBbJGDixK3rbXueOzK8Oh05xT1HBQSlKvuMiRxMbMPEnZjzsRc_-XlybnXHYx",
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
      Authorization: "Bearer aMyI7YRYlTRVSrH0cgC2ZHCbcDtSW9w2J9AmZaryuRpHgD3boyh_Pw9cFvvnw20d_znLBbJGDixK3rbXueOzK8Oh05xT1HBQSlKvuMiRxMbMPEnZjzsRc_-XlybnXHYx",
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
      Authorization: "Bearer aMyI7YRYlTRVSrH0cgC2ZHCbcDtSW9w2J9AmZaryuRpHgD3boyh_Pw9cFvvnw20d_znLBbJGDixK3rbXueOzK8Oh05xT1HBQSlKvuMiRxMbMPEnZjzsRc_-XlybnXHYx",
      UserAgent: "PostmanRuntime/7.13.0",
      Accept: "*/*",
      CacheControl: "no-cache",
      PostmanToken: "c1030027-5b1f-4caf-969d-84ec64666426,f9c8b243-f557-4cfc-9286-759a818cd6a1",
      cacheControl: "no-cache"
   }
});

$.when(slotApp.koreanToronto, slotApp.koreanMississauga, slotApp.mexicanToronto, slotApp.mexicanMississauga)
   .then((resultOfKoreanToronto, resultOfKoreanMississauga, resultOfMexicanToronto, resultOfMexicanMississauga) => {
      slotApp.koreanToronto = resultOfKoreanToronto;
      slotApp.koreanMississauga = resultOfKoreanMississauga;
      slotApp.mexicanToronto = resultOfMexicanToronto;
      slotApp.mexicanMississauga = resultOfMexicanMississauga;
   })
   .fail((err1, err2, err3, err4) => {
      console.log(err1, err2, err3, err4);
   });

slotApp.randomGenerator = function (slotArray) {
    return Math.floor(Math.random() * slotArray.length);
}

slotApp.init = function () {
   $('form').on('submit', function (e) {
      e.preventDefault();

      const userInputPrice = $(`input[name=price]:checked`).val();
      const userInputCuisine = $(`input[name=cuisine]:checked`).val();
      const userInputCity = $(`input[name=city]:checked`).val();

      let randomNumber = 0;
      modArray = [];

      //cheap mexican Toronto
      if (userInputPrice === "1" && userInputCuisine === "1" && userInputCity === "1") {

         for (let i = 0; i < (slotApp.mexicanToronto[0].businesses.length); i++) {
            if (slotApp.mexicanToronto[0].businesses[i].price === '$') {
               slotApp.modArray.push(slotApp.mexicanToronto[0].businesses[i]);
            }
         }
      }
      //cheap mexican mississauga
      if (userInputPrice === "1" && userInputCuisine === "1" && userInputCity === "2") {
         for (let i = 0; i < (slotApp.mexicanMississauga[0].businesses.length); i++) {
            if (slotApp.mexicanMississauga[0].businesses[i].price === '$') {
               slotApp.modArray.push(slotApp.mexicanMississauga[0].businesses[i]);
            }
         }
      }
      //cheap korean toronto
      if (userInputPrice === "1" && userInputCuisine === "2" && userInputCity === "1") {
         for (let i = 0; i < (slotApp.koreanToronto[0].businesses.length); i++) {
            if (slotApp.koreanToronto[0].businesses[i].price === '$') {
               slotApp.modArray.push(slotApp.koreanToronto[0].businesses[i]);
            }
         }
      }
      //cheap korean mississauga
      if (userInputPrice === "1" && userInputCuisine === "2" && userInputCity === "2") {
         for (let i = 0; i < (slotApp.koreanMississauga[0].businesses.length); i++) {
            if (slotApp.koreanMississauga[0].businesses[i].price === '$') {
               slotApp.modArray.push(slotApp.koreanMississauga[0].businesses[i]);
            }
         }
      }
      //expensive mexican Toronto
      if (userInputPrice === "2" && userInputCuisine === "1" && userInputCity === "1") {
         for (let i = 0; i < (slotApp.mexicanToronto[0].businesses.length); i++) {
            if (slotApp.mexicanToronto[0].businesses[i].price === '$$') {
               slotApp.modArray.push(slotApp.mexicanToronto[0].businesses[i]);
            }
         }
      }
      //expensive mexican mississauga
      if (userInputPrice === "2" && userInputCuisine === "1" && userInputCity === "2") {
         for (let i = 0; i < (slotApp.mexicanMississauga[0].businesses.length); i++) {
            if (slotApp.mexicanMississauga[0].businesses[i].price === '$$') {
               slotApp.modArray.push(slotApp.mexicanMississauga[0].businesses[i]);
            }
         }
      }
      //expensive korean toronto
      if (userInputPrice === "2" && userInputCuisine === "2" && userInputCity === "1") {
         for (let i = 0; i < (slotApp.koreanToronto[0].businesses.length); i++) {
            if (slotApp.koreanToronto[0].businesses[i].price === '$$') {
               slotApp.modArray.push(slotApp.koreanToronto[0].businesses[i]);
            }
         }
      }
      //expensive korean mississauga
      if (userInputPrice === "2" && userInputCuisine === "2" && userInputCity === "2") {
         for (let i = 0; i < (slotApp.koreanMississauga[0].businesses.length); i++) {
            if (slotApp.koreanMississauga[0].businesses[i].price === '$$') {
               slotApp.modArray.push(slotApp.koreanMississauga[0].businesses[i]);
            }
         }
      }
      randomNumber = slotApp.randomGenerator(slotApp.modArray);
      console.log(randomNumber);

      console.log(slotApp.modArray[randomNumber]);

      slotApp.currentSelection = slotApp.modArray[randomNumber];

      console.log(slotApp.currentSelection);


      // clears selection for next click
      slotApp.modArray.length = 0;

      

   })
}



$(function () {
   slotApp.init();
    //    console.log(slotApp.randomGenerator());
});