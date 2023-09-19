const path = require('node:path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoute = require('./routes/shop');

/* use: Middleware를 실행시키기 위한 메서드
        모든 http 메서드(GET, POST 등...)에 반응
*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoute);

app.use(errorController.get404);

app.listen(3000);
