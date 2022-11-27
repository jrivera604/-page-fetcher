const request = require('request');
const fs = require('fs');
//installed npm pakage to determine if path is valid
const validPath = require('is-valid-path')
const input = process.argv.slice(2);
const url = input[0];
const path = input[1];

const fetcher = () => {
  request(url, (error, response, body) => {
    if(error){
      console.log(`Warning ${error}`)
      process.exit();
    }
    if(response){
      fs.writeFile(path, body, (error) => {
        if(error){
          throw error;
        }
        else{ 
          console.log(`Downloaded ${body.length} bytes to ${path}`);
      }
      })
    }
  })
  if(!validPath(path)){
    console.log(`${path} is not a valid path`)
    process.exit();
  }

}

fetcher();