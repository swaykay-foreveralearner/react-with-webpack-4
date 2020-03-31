var fs = require("fs");

var externalJavascriptFiles = [
    'plugins/sample-1.js',
    'plugins/sample-2.js'
]

console.log(externalJavascriptFiles.length + " number of file(s).");

fs.writeFile("vendors.js", "", (err) => {
    if (err) console.log(err);
    console.log("Emptied vendors.js file.");
});

externalJavascriptFiles.map((element, index) => {
    fs.readFile(element, "utf-8", (err, data) => {
        if (err) { console.log(err) }
        setTimeout(() => {
            fs.appendFile('vendors.js', data.toString(), function (err) {
                if (err) { console.log(err) }
                console.log(element +" written to file.");
            });
        }, 500);
    });
});