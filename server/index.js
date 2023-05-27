import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import connectDB from './mongoDB/connection.js'
import PostRoute from './routes/postRoute.js'
import AiRoute from './routes/aiRoute.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({limit:'50mb'}))

app.use('/api/v1/post',PostRoute)
app.use('/api/v1/ai',AiRoute)

app.get('/',async(req,res)=>{
    res.send('Hello Dall-E')
})


const startServer = async()=>{
    try {
        connectDB(process.env.MONGO_URL)
        app.listen(process.env.PORT || 5000, ()=> console.log(`Server has stated on port number ${process.env.PORT || 5000}`))
    } catch (error) {
        console.log(error)
    }
}
startServer()
