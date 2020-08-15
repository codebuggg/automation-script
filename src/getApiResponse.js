const axios = require("axios");

module.exports = async function getApiResponse(url){
    
    let result = await axios.get(url)

    return result.data
}