var nearley = require('nearley');
var grammar = require('./json.js');
var parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
try {
    parser.feed("Hello");
}
catch (e) {
    console.log("Parser Failed: " + e.message);
}
