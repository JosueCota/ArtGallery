const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
//Whitelists connection
app.use(cors());

const db = require('./models');

//Routers
const customerRouter = require('./routes/Customer');
app.use("/customer", customerRouter);
const artistRouter = require('./routes/Artist');
app.use("/artist", artistRouter);
const artshowsRouter = require('./routes/Artshows');
app.use("/artshows", artshowsRouter);
const artworkRouter = require('./routes/Artwork');
app.use("/artwork", artworkRouter);

//Goes over every tables in model, if they dont exist, the table gets created
db.sequelize.sync().then(()=>{

    //Starts our server
    app.listen(3001, () => {
    console.log("Server running on port 3001");
});
});



