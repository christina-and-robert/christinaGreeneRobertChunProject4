// object for namespacing
slotApp = {};

// Robert's API Key aMyI7YRYlTRVSrH0cgC2ZHCbcDtSW9w2J9AmZaryuRpHgD3boyh_Pw9cFvvnw20d_znLBbJGDixK3rbXueOzK8Oh05xT1HBQSlKvuMiRxMbMPEnZjzsRc_ - XlybnXHYx

// Christina's API Key GAMYzGkShejSRIXgbB988do_OXKkIjVLpZ4Zeb9VgPrRdZBGCY44fbsYsjzoh4IWsX1O8KLwLfbWu6o4BYy29jZp3nXs1SaUNhxHA2hCBWbJ6fJR0qhcjZ2ok27kXHYx

// saving URL snippits that match our search results for each API call
slotApp.koreanTorontoURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Toronto&categories=korean&limit=50';
slotApp.koreanMississauagaURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Mississauga&categories=korean&limit=50';
slotApp.mexicanTorontoURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Toronto&categories=mexican&limit=50';
slotApp.mexicanMississaugaURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Mississauga&categories=mexican&limit=50';

// declaring variables
slotApp.koreanToronto;
slotApp.koreanMississauga;
slotApp.mexicanToronto;
slotApp.mexicanMississauga;

// declaring arrays
slotApp.modArray = [];
slotApp.currentSelection = [];


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

// Setting up parameters for if the promise is fulfilled or not
$.when(slotApp.koreanToronto, slotApp.koreanMississauga, slotApp.mexicanToronto, slotApp.mexicanMississauga)
    .then((resultOfKoreanToronto, resultOfKoreanMississauga, resultOfMexicanToronto, resultOfMexicanMississauga) => {
        slotApp.koreanToronto = resultOfKoreanToronto;
        slotApp.koreanMississauga = resultOfKoreanMississauga;
        slotApp.mexicanToronto = resultOfMexicanToronto;
        slotApp.mexicanMississauga = resultOfMexicanMississauga;
    })
    .fail((err1, err2, err3, err4) => {
        alert('Please refresh the page to try again.');
    });

// a math function to randomly select a value in slotArray
slotApp.randomGenerator = function (slotArray) {
    return Math.floor(Math.random() * slotArray.length);
}

slotApp.decisionMaking = function () {

    // collecting values from user input
    const userInputPrice = $(`input[name=price]:checked`).val();
    const userInputCuisine = $(`input[name=cuisine]:checked`).val();
    const userInputCity = $(`input[name=city]:checked`).val();

    // clears selection for next click
    slotApp.modArray.length = 0;
    /////If statements for each type of search////////////
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

}

slotApp.userDisplay = function(){
    // adding results section to the html page dynamically
    $('.results').html(`
        <div class="resultsInformation"><aside class="imageContainer"><img src="${slotApp.currentSelection.image_url}" id="restaurantImage" alt=""></aside><article><h2 class="restaurantName">${slotApp.currentSelection.name}</h2><p class="locationInfo">${slotApp.currentSelection.location.address1}</p><p class="rating">Rating: ${slotApp.currentSelection.rating} of 5</p></article></div>`
    );
}


// functions we want to happen when .init is called (when doc is ready)
slotApp.init = function () {
    // instructions for what is to happen once the form is submitted
    $('form').on('submit', function (e) {

        // prevents default function of button when clicked
        e.preventDefault();


        // setting randomNumber to 0
        let randomNumber = 0;
        
        
        // smooth scrolls to results section
        $(`html,body`).animate({
            scrollTop: $(`.results`).offset().top
        },
            `slow`);

        slotApp.decisionMaking();

        // runs the randomGenerator function to find a random number in the modArray
        randomNumber = slotApp.randomGenerator(slotApp.modArray);

        // defining currentSelection to include the 1 random number that returns
        slotApp.currentSelection = slotApp.modArray[randomNumber];

        slotApp.userDisplay();
    })
}

// all of the functions that will run when the document is ready
$(function () {
    slotApp.init();
});