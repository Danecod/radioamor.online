const express = require('express');
const app = express();
const path = require('path');
 

// setting 
app.set('port' , 3000);
app.set('views', path.join(__dirname ,'views'));
app.set('view engine' , 'ejs');
app.engine('html' ,require('ejs').renderFile);

// Midlewares


// Routes


app.use(require('./routes/routes'));


// public static 
app.use(express.static(path.join(__dirname,'public')));


// Listennig in server 

app.listen(app.get('port') , ()=>{
    console.log('servidor encendido en el puerto :' , app.get('port'));
} );