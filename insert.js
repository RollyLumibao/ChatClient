var mysql = require ('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user:'rolly',
	password:'rolly',
	database:'chat'
});
connection.connect();