/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import input from '@inquirer/input';
const linkToEncode = await input({ message: 'Enter your name' });
import fs, { link } from 'fs';
import qr from "qr-image"
function generateQRCode(link, outputPath) {
    const qrCode = qr.image(link, { type: 'png' });
    qrCode.pipe(fs.createWriteStream(outputPath));
}

const outputFilePath = 'qrcode.png';

generateQRCode(linkToEncode, outputFilePath);

fs.writeFile("MYURL.txt" , linkToEncode ,function(error){
    if(error) throw error;
    else{
        console.log("File created successfully")
    }
})