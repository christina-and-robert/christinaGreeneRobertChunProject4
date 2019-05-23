slotApp = {};

slotApp.koreanTorontoURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Toronto&categories=korean&limit=50';
slotApp.koreanMississauagaURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Mississauga&categories=korean&limit=50';
slotApp.mexicanTorontoURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Toronto&categories=Mexican&limit=50';
slotApp.mexicanMississaugaURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Mississauga&categories=Mexican&limit=50';

slotApp.koreanToronto;
slotApp.koreanMississauga;
slotApp.mexicanToronto;
slotApp.mexicanMississauga;

// slotApp.order = 0;

//created a function for calling the API
// slotApp.callAPI = function (requiredURL) {
//    settings = {
//       async: true,
//       crossDomain: true,
//       url: requiredURL,
//       method: "GET",
//       headers: {
//          Authorization: "Bearer GAMYzGkShejSRIXgbB988do_OXKkIjVLpZ4Zeb9VgPrRdZBGCY44fbsYsjzoh4IWsX1O8KLwLfbWu6o4BYy29jZp3nXs1SaUNhxHA2hCBWbJ6fJR0qhcjZ2ok27kXHYx",
//          User-Agent: "PostmanRuntime/7.13.0",
//          Accept: "*/*",
//          Cache-Control: "no-cache",
//          Postman-Token: "c1030027-5b1f-4caf-969d-84ec64666426,f9c8b243-f557-4cfc-9286-759a818cd6a1",
//          // "Host": "api.yelp.com",
//          // "accept-encoding": "gzip, deflate",
//          // "Connection": "keep-alive",
//          cache-control: "no-cache"
//       }
//    }

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
        // "Host": "api.yelp.com",
        // "accept-encoding": "gzip, deflate",
        // "Connection": "keep-alive",
        cacheControl: "no-cache"
    }
});

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
        // "Host": "api.yelp.com",
        // "accept-encoding": "gzip, deflate",
        // "Connection": "keep-alive",
        cacheControl: "no-cache"
    }
});

$.when(slotApp.koreanToronto, slotApp.koreanMississauga)
    .then((resultOfKoreanToronto, resultOfKoreanMississauga) => {
        console.log(resultOfKoreanToronto);
        console.log(resultOfKoreanMississauga);
    })

    .fail((err1, err2) => {
        console.log(err1, err2);
    });


// slotApp.init = function () {
//    slotApp.callAPI(slotApp.koreanTorontoURL, slotApp.order);
//    slotApp.order++;
//    slotApp.callAPI(slotApp.koreanMississaugaURL, slotApp.order);
//    slotApp.order++;
//    slotApp.callAPI(slotApp.mexicanTorontoURL, slotApp.order);
//    slotApp.order++;
//    slotApp.callAPI(slotApp.mexicanMississaugaURL, slotApp.order);

//    console.log(slotApp.koreanToronto);
//    console.log(slotApp.koreanMississauaga);
//    console.log(slotApp.mexicanToronto);
//    console.log(slotApp.mexicanMississauga);

// slotApp.mexicanToronto = slotApp.callAPI(slotApp.mexicanTorontoURL);
// slotApp.mexicanMississauga = slotApp.callAPI(slotApp.mexicanMississaugaURL);

// console.log(slotApp.koreanToronto);









$(function () {
    // slotApp.init();

});