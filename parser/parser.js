var nearley = require('nearley');
var grammar = require('../grammar/grammar');
var parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
try {
    parser.feed("o");
}
catch (e) {
    console.log("Parser Failed: " + e.message);
}
