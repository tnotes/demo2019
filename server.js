const express = require('express');
const app = express();
app.get('/',async function(req,res){
	return res.send('hello world');
});
app.listen(8080);