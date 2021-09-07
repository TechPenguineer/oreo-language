const nearley = require('nearley')
const grammar = require('./grammar.json')

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

try 
{
    parser.feed("Hello")
}
catch(e)
{
    console.log("Parser Failed: " + e.message)
}