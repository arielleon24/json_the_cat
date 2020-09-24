const request = require("request");



const fetchBreedDescription = function(breedName, callback) {
  let apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
  request(apiURL, (error, response, body) => {
    if (error) {  
      callback(error)
      return
    } else {
      const objBody = JSON.parse(body) 
      if (objBody.length === 0 ) {
      console.log("Breed not found:", breedName)
    } else {
      console.log(objBody[0].description)
    }
   }
  })
};

module.exports = { fetchBreedDescription }
