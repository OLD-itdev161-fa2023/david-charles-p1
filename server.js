import express from 'express';  // node imports this from node_modules
import connectDatabase from './config/db';


const app = express();  //creating express object named app

//Connect to Db
connectDatabase();

//API endpoints
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
    );

//Connection Listener
app.listen(3500, ()=> console.log('Express server running on port 3500'));