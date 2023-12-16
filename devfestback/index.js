import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from "cookie-parser";
import helmet from "helmet";


import collectionRoute from './routes/CollectionRoute.js'


dotenv.config()
const app =express()

//eslint-disable-next-line
const port =process.env.PORT || 8000;
const corsOptions={
    origin:true,
    credentials:true
}

//database connection
mongoose.set("strictQuery",false)//remove the error in the console
const connect =async()=>{
    try{
       
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("MongoDB database connected !!")
    }catch(err){
        console.log("MongoDB database connection failed ")
        console.log(err.message)
    }
}

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(morgan('tiny'));
app.use(helmet());
app.use("/uploads",express.static('uploads'))

app.use("/api/collection",collectionRoute)


// server listening
app.listen(port,()=>{
    connect();
    console.log('server listening on port',port);
})
