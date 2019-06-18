// console.log("***small change program***");
// if (process.argv.length <3){
//     console.log ("usage: node index.js <value>")
//     process.exit();
//   } 

//   var changearray =[50,25,10,5,2,1]
//   var changevalue = process.argv[2];
// changevalue=parseInt(changevalue);

// for (var i=0;i<changearray.length;i++){
//     if (changevalue/changearray[i]>=1){
//         var piecegiven= Math.floor(changevalue/changearray[i])
//         console.log ( "change given " + piecegiven+" piece/s of "+changearray[i]+ " cent/s coin");
//         changevalue=changevalue - (piecegiven*changearray[i]);
//     }
// }

// console.log("***Roman numbers conversion ***");
// if (process.argv.length < 3) {
//     console.log("usage: node index.js <String>")
//     process.exit();
// }
// var romanstr = process.argv[2];

// var romans = {
//     'M': 1000,
//     'CM': 900,
//     'D': 500,
//     'CD': 400,
//     'C': 100,
//     'XC': 90,
//     'L': 50,
//     'XL': 40,
//     'X': 10,
//     'IX': 9,
//     'V': 5,
//     'IV': 4,
//     'III': 3,
//     'II': 2,
//     'I': 1
//    };
// console.log(Object.keys(romans).length);
// romans_json_length = Object.keys(romans).length;
// // console.log(romans['CM']);
// // console.log(Object.keys(romans));
// var romans_keys_array = Object.keys(romans);

// romanlength = Object.keys(romans).length;
// var total_value = 0;
// var order=0;
// while (romanstr.length > 0 ) {
//     for (var i = 0; i < romans_json_length; i++) {
//         if (romanstr.indexOf(romans_keys_array[i]) == 0) {
//             console.log(romans[romans_keys_array[i]]);
//             if (order <= i){
//             order=i;
//             total_value = total_value + romans[romans_keys_array[i]];
//             romanstr = romanstr.substr(romans_keys_array[i].length, romanstr.length);
//             break;
//             }
//             else {
//                 console.log ("Invalid Roman Number string");
//                 romanstr='';
//                 total_value=0;
//                 break;
//             }
//         }
//         // console.log ("value of i ",i);
//         if (i>13){
//             //means that there is an invalid chars in the romanstr
//             console.log ("Invalid Roman Number string");
//             romanstr='';
//             total_value=0;
//             break;
//         }
//     }

// }

// if (total_value)
// console.log("total value", total_value);  

var fs = require("fs");
var readline = require('readline');
console.log("***word unscrambling program***");
var bin = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


if (process.argv.length < 3) {
    console.log("usage: node index.js <scammbled string>")
    process.exit();
}

var scrambled_text = process.argv[2].toLowerCase();
console.log('scrambled text', scrambled_text);

getCodedText(scrambled_text);
//   console.log ('bin', bin);

readline.createInterface({
    input: fs.createReadStream('dic_words.txt'),
    terminal: false
}).on('line', function (line) {
    // console.log('Line: ' + line);
    // process.exit();
    // searchName.push(line);
    matchString(line);
});


function getCodedText(text) {
    var charCode;
    for (var i = 0; i < text.length; i++) {
        // console.log("charcode:", text.charCodeAt(i))
        charCode = text.charCodeAt(i) - 97;
        // console.log(charCode);
        if (charCode >= 0 && charCode < 26)
            bin[charCode] += 1;
    }
    // console.log("bin:", bin);

}

function matchString(line) {
    var tempbin = [...bin];
    var temp;
    // console.log (tempbin);
    if (line.length == scrambled_text.length) {
        // console.log("likely hit", line);
        for (var i = 0; i < line.length; i++) {
            temp = line.charCodeAt(i) - 97;
            // console.log (temp);
            if (temp >= 0 && temp < 26) {
                tempbin[temp] -= 1;
                if (tempbin[temp] < 0) {
                    return;
                }

            }
            else
            return;
        }
        console.log ("match found ",line);
        // process.exit();
    }
    else
        return;
}