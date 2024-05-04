const mysql = require('mysql');
 function conectarBD(){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node_mysql',
        port: 3306
        });
        connection.connect(function(error){
        if(error){
        throw error;
        }else{
        console.log('Conexion correcta.');
        }
        });
        connection.end();
        
}
module.exports=conectarBD;
