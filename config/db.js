require('dotenv').config();
const mongoose= require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL);
    const connection=mongoose.connection;

    connection.on('error', console.error.bind(console, 'connection error:'));
    connection.once('open',()=>{
        console.log('Database Connected.')
    });
}

module.exports= connectDB;
