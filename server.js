import express from 'express';  // node imports this from node_modules
import connectDatabase from './config/db';
import {check, validationResult } from 'express-validator';


const app = express();  //creating express object named app

//Connect to Db
connectDatabase();

//Configure Middleware
app.use(express.json({ extended: false}));  //needed by endpoint to understand the HighScore model, which is in JSONsk

//API endpoints
/**
 * @route GET /
 * @desc Test endpoint
 */
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
    );

/**
 * @route Post api/highScores
 * @desk Post highScore
 */
app.post('/api/highScores', 
[
    check('initials', 'Please enter your initials.').not().isEmpty(),
    check('score', 'Error: NULL score value!').not().isEmpty(),
    check('score', 'Error: Non Integer value.').isInt()
],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({errors: errors.array() });
    }else{
        return res.send(req.body);
    }
/*     console.log(req.body);
    res.send(req.body); */
});

//Connection Listener
app.listen(3500, ()=> console.log('Express server running on port 3500'));