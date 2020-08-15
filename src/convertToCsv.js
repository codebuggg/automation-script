const fastcsv = require('fast-csv');
const fs = require('fs');


module.exports = async function convertToCsv(data){
  const ws = fs.createWriteStream("out.csv");
  fastcsv
    .write(data, { headers: true })
    .pipe(ws);
}
