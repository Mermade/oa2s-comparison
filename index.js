var fs = require('fs');
var shins = require('shins/index.js');
var swaggerToSlate = require('swagger-to-slate/src/convert.js');

swaggerToSlate('./specs/petstore.json','./output/swagger-to-slate.md');

var inputStr = fs.readFileSync('./output/swagger-to-slate.md','utf8');

var options = {};
options.minify = true;

shins.render(inputStr,options,function(err,str){
  fs.writeFileSync('./docs/swagger-to-slate.html',str,'utf8');
});
