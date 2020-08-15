const getApiResponse = require('../src/getApiResponse');
const convertToCsv = require('../src/convertToCsv');
const {argv} = require('yargs');

(async  () => {
    // console.log(process.argv[2])
    // const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'

    const apiData = await getApiResponse(argv.url);

    await convertToCsv(apiData, "sample-ouput");
 
})();