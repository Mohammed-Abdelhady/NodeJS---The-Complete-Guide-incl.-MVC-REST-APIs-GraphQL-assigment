const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRaw = require('./routes/admin');
const usersRaw = require('./routes/users');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRaw.routes);
app.use(usersRaw);

app.use((req, res, next)=>{
    res.status(404).render("404", { pageTitle: "Page Not Found", path: "Error" });
});

app.listen(3000);