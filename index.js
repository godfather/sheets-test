const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('./cultura-site-8514829f6124.json');

const doc = new GoogleSpreadsheet('12Hscx7gdV7yQ4SKlhE0UMqBHlmps6e3hvi4El0CaZH8');

let sheet;

doc.useServiceAccountAuth(credentials, error => {
    if(error) throw new Error(error);

    doc.getInfo((error, info) => {
        sheet = info.worksheets[0];
        sheet.getRows({
            offset:1,
            limit:20,
            query: '(marca=Dell)'
        }, (error, rows) => {
            rows.map(row => console.log(row.quemutiliza));
        })
    });
})