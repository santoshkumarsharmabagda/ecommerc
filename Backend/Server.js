const app = require('./App');
const dotenv = require('dotenv');
const connect = require("./Confing/database")

//  handleing the unchanged existing
process.on('uncaughtException',(err) => {
    console.log(` ERROR: ${err.message}`);
    console.log(` shuting down the server due to uncaught exception `); 
    process.exit(1);
});

dotenv.config({
    path:"Backend/Confing/Confing.env",
})

connect();


const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on http//localhost:${process.env.PORT}`);
});

// unhandled promise reajeson
process.on('unhandleRejection', (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`something down the surver due to unhandled rejection promise`);
    server.close(()=>{
        process.exit(1);
    });
})