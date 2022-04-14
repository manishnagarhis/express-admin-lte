const express = require('express');
const app = express();
const mainRouter = require('./routes/index');
const adminRouter = require('./routes/adminRouter');
const PORT = process.env.PORT || 3000;
require('@marvnet/express-dynamic-helpers-patch')(app);

var expressLayouts = require('express-ejs-layouts');
var path = require('path');


//Template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout/adminLayout' );

//helper
app.dynamicHelpers({ prop: require(__dirname + '/views/helpers/prop') });

//public folder
app.use(express.static('public'));

//Routes
app.use(mainRouter);
app.use(adminRouter);

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});