const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const productsRouter = require("./src/router/productsRouter");

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

productsRouter.route("/").get((req,res) =>{
    res.render("products",{
        products,
    }
    );
});

productsRouter.route("/:id").get((req,res) =>{
    const id = req.params.id;
    res.render("product",{
        product: products[id],

    });
});

app.use("/products", productsRouter)

app.get("/",(req,res) => {

    res.render('index',{username: 'AomZa55+',customers: ["kitti", "kittikorn" , "kitty"]});
})

app.listen(PORT, () =>{
    debug("Listening on port : " + chalk.red(PORT));
})