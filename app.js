const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const productsRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs");

productsRouter.route("/").get((req,res) =>{
    res.render("products",{
        products: [
            {productTitle:'น้ำยาล้างจาน1', productDescription: 'น้ำยาล้างจานดีจริงๆ',productPrice: '30 บาท'},
            {productTitle:'น้ำยาล้างจาน2', productDescription: 'น้ำยาล้างจานดีจริงๆ',productPrice: '45 บาท'},
            {productTitle:'น้ำยาล้างจาน3', productDescription: 'น้ำยาล้างจานดีจริงๆ',productPrice: '50 บาท'},
            {productTitle:'น้ำยาล้างจาน4', productDescription: 'น้ำยาล้างจานดีจริงๆ',productPrice: '35 บาท'},
            
        ],
        
    });
});

productsRouter.route("/1").get((req,res) =>{
    res.send("Hello World!! i'm product1");
})

app.use("/products", productsRouter)

app.get("/",(req,res) => {

    res.render('index',{username: 'AomZa55+',customers: ["kitti", "kittikorn" , "kitty"]});
})

app.listen(PORT, () =>{
    debug("Listening on port : " + chalk.green(PORT));
})