var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.locals.connection.query('SELECT * from pokemon_list order by name ASC', function (error, results, fields) {
		if(error){
			res.status(400).json()
		}
		else{
			res.json(results)
		}
	});
});


router.post('/newpokemon', function(req, res, next) {
	res.locals.connection.query("insert into pokemon_list (name, description) VALUES ('"+req.body.name+"', '"+req.body.description+"')", 
	function (error, results) {
		if(error){
			res.status(400).json()
		}
		else{
			res.json(results)
		}
    });
});


router.post('/deletepokemon', function(req, res, next) {
	res.locals.connection.query("delete from pokemon_list WHERE name = '"+req.body.name+"'", 
	function (error, results) {
		if(error){
			res.status(400).json()
		}
		else{
			res.json(results)
		}
    });
});

module.exports = router;