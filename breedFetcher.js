const request = require("request");
const rq = request; 

let nodeInput = process.argv[2];
let apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${nodeInput}`

rq(apiURL, (error, response, body) => {
  if (error) {  
    console.log("Request Failed:", error);
    return
  } 
  const objBody = JSON.parse(body)  
  if (objBody.length === 0 ) {
    console.log("Breed not found:", nodeInput)
  } else {
    console.log(objBody[0].description)
  }
})