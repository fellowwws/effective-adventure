import fs from "fs";
import Papa from 'papaparse';
import QRCode from 'qrcode';

const input = fs.createReadStream("./input/A.csv");

Papa.parse(input, {
    header: true,
    skipEmptyLines: true,
    complete: (results, file) => {
        results.data.forEach((row) => {
            QRCode.toFile(`./output/${row.Label}.png`, row.Resource, {});
        })
    }
});
