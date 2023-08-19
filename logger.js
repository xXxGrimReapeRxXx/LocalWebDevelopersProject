var url = "http://mylogger.io/log";

function log(message) {
    //send http request
    console.log(message)
}


// the point of this file is to learn how node.js works it uses something called modules,
// making the whole process more modular and allowing to call up those chunks of code so they can be reused


module.exports.log = log;
// exporting the newly created function into the module named log(top left side)(can name that however we want to)