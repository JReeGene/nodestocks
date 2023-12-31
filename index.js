const express = require('express');
const exphbs = require('express-handlebars');
//Fixed the handlebars
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', {
        fruits: "Oranges"
    }); 
});

app.listen(3000);