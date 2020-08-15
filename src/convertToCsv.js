const fastcsv = require('fast-csv');
const fs = require('fs');


module.exports = async function convertToCsv(data,filename){
  const ws = fs.createWriteStream(`${filename}.csv`);
  fastcsv
    .write(data, { headers: true })
    .pipe(ws);
}
