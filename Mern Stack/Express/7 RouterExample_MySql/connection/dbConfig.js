import mysql from 'mysql2';
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mern_mysql_530"
});

export default con;