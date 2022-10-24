const Constant = {
    initForSaleTypes: ['By Agent', 'Coming Soon', 'By Owner', 'Auction', 'New Construction', 'Foreclosures'],
    initPropertyType: ['Condo', 'House', 'Town_House', 'Multi_Unit', 'Modular', 'Commercial', 'Land', 'Timeshare', 'Parking', 'Rental', 'Other'],
    initViewTypes: ['City', 'Park', 'Mountain', 'Water'],
    initMaxFee: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    initSquareFeet: [500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3500, 4000, 5000, 7500],
    initOtherAmenities: ['Must have A/C', 'Must have pool', 'Waterfront'],
    initLotSize: {'1,000 sqft': 1000,
                  '2,000 sqft': 2000,
                  '3,000 sqft': 3000,
                  '4,000 sqft': 4000,
                  '5,000 sqft': 5000,
                  '7,500 sqft': 7500,
                  '1/4 acre/10,890 sqft': 10890,
                  '1/2 acre': 21780,
                  '1 acre': 43560,
                  '2 acres': 87120,
                  '5 acres': 217800,
                  '10 acres': 435600,
                  '20 acres': 871200,
                  '50 acres': 2178000,
                  '100 acres': 4356000
                },
  googleClientId: "298588107545-te5dtnv7spapp3774tjkijm5jtr0f60g.apps.googleusercontent.com",
  facebookAppId: "517332449814658",
  API_SEARCH_URL: 'http://cth-web-stg.eba-eub8zyep.us-west-1.elasticbeanstalk.com/listings/search-x.api',
  API_DETAIL_URL: 'http://cth-web-stg.eba-eub8zyep.us-west-1.elasticbeanstalk.com/listings/detail-x/',

  TEST_API_DETAIL_URL: 'http://localhost:3001',

  // TEST_API_DETAIL_URL: 'http://207.246.102.71:3001/'
}

export default Constant;
