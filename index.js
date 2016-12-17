var fs = require('fs');
var petstore = require('./specs/petstore.json');

var shins = require('shins/index.js');
var swaggerToSlate = require('swagger-to-slate/src/convert.js');
var widdershins = require('widdershins');

swaggerToSlate('./specs/petstore.json','./output/swagger-to-slate.md');

var options = {};
options.minify = true;

var inputStr = fs.readFileSync('./output/swagger-to-slate.md','utf8');
shins.render(inputStr,options,function(err,str){
  if (err) {
  	console.log(JSON.stringify(err,null,2));
  }
  fs.writeFileSync('./docs/swagger-to-slate.html',str,'utf8');
});

// node node_modules/openapi2slate/main.js specs/petstore.json > output/openapi2slate.md

inputStr = fs.readFileSync('./output/openapi2slate.md','utf8');

shins.render(inputStr,options,function(err,str){
  if (err) {
  	console.log(JSON.stringify(err,null,2));
  }
  fs.writeFileSync('./docs/openapi2slate.html',str,'utf8');
});

inputStr = widdershins.convert(petstore,{});
fs.writeFileSync('./output/widdershins.md','utf8');
shins.render(inputStr,options,function(err,str){
  if (err) {
  	console.log(JSON.stringify(err,null,2));
  }
  fs.writeFileSync('./docs/widdershins.html',str,'utf8');
});
