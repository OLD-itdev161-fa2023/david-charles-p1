import mongoose from 'mongoose'; 
import config from 'config';

//Get connection string from default.json via config module
const db = config.get("mongoURI");
//const db = "mongodb+srv://project1:itdev161@cluster0.uoikwxs.mongodb.net/?retryWrites=true&w=majority";

//Connect to MongoDB
const connectDatabase = async () => {
    try{
        await mongoose.connect(db, {
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    }catch(error) {
        console.error(error.message);

        //exit with failure code
        process.exit(1);
    }
};

export default connectDatabase;
