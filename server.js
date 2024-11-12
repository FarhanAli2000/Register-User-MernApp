import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoute.js'


//configure env
dotenv.config();

//databse config
connectDB();

//i will use rest object to create API'S
const app=express();

//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth",authRoutes);

//Now i will create rest api for my project
app.get('/',(req,res)=>{
res.send("<h1>welcome to Ecommerce app</h1>")
})

//PORT
const PORT=process.env.PORT ||8080;

//app run OR listen
app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT} and mode is ${process.env.DEV_MODE}`.bgCyan.white)
})