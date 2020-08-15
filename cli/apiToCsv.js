const getApiResponse = require('../src/getApiResponse');
const convertToCsv = require('../src/convertToCsv');

(async  () => {
    const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'

    const apiData = await getApiResponse(API_ENDPOINT);

    await convertToCsv(apiData);
 
})();